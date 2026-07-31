import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");

function loadScript(relativePath, context) {
  vm.runInContext(fs.readFileSync(path.join(root, relativePath), "utf8"), context, { filename: relativePath });
}

function loadCurriculum(cardsPath, visualsPath, curriculumKey, cardsKey, visualsKey) {
  const context = vm.createContext({ window: {} });
  loadScript(cardsPath, context);
  loadScript(visualsPath, context);
  const curriculum = curriculumKey ? context.window[curriculumKey] : context.window;
  return { cards: curriculum[cardsKey], visuals: context.window[visualsKey] };
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function hashString(value) {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

const palettes = [
  { sky: "#a9c8ca", ground: "#c7d5ae", dark: "#163b32", mid: "#2f725d", accent: "#d85c3d", light: "#fff8e9", road: "#3c4341" },
  { sky: "#f0c88a", ground: "#d6b66d", dark: "#243d42", mid: "#4c7680", accent: "#c54535", light: "#fffaf0", road: "#41433f" },
  { sky: "#a9c2df", ground: "#b9cc9d", dark: "#273f67", mid: "#4f739c", accent: "#d75b36", light: "#fff9eb", road: "#3d4148" },
  { sky: "#c8b6d8", ground: "#b8cfad", dark: "#43385f", mid: "#74608d", accent: "#d35c43", light: "#fff9ef", road: "#3f4145" },
  { sky: "#98c5b8", ground: "#d7ca91", dark: "#234b3f", mid: "#4b806c", accent: "#bd4e3a", light: "#fff9ea", road: "#3d4240" },
  { sky: "#c9c4ad", ground: "#b7c993", dark: "#3f4435", mid: "#707c58", accent: "#ca5639", light: "#fffaf0", road: "#40423d" }
];

function symbolSize(symbol) {
  if (symbol.length > 18) return 18;
  if (symbol.length > 12) return 21;
  if (symbol.length > 8) return 24;
  if (symbol.length > 5) return 30;
  if (symbol.length > 4) return 38;
  return 48;
}

function symbolText(symbol, x, y, fill = "#fffaf0", anchor = "middle") {
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="Arial, sans-serif" font-size="${symbolSize(symbol)}" font-weight="800" text-anchor="${anchor}" letter-spacing="1">${escapeXml(symbol)}</text>`;
}

function car(x, y, color, rotation = 0, scale = 1) {
  return `<g transform="translate(${x} ${y}) rotate(${rotation}) scale(${scale})">
    <rect x="-34" y="-16" width="68" height="32" rx="10" fill="${color}" stroke="#172a27" stroke-width="3"/>
    <rect x="-16" y="-12" width="32" height="24" rx="5" fill="#cfe4e3" opacity=".9"/>
    <circle cx="-21" cy="17" r="5" fill="#172a27"/><circle cx="21" cy="17" r="5" fill="#172a27"/>
  </g>`;
}

function person(x, y, color, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="${color}" stroke="${color}" stroke-linecap="round">
    <circle cy="-23" r="9"/><path d="M0 -13V18M0 -2L-16 8M0 -2L16 8M0 18L-13 38M0 18L14 38" fill="none" stroke-width="8"/>
  </g>`;
}

function roadPerspective(colors) {
  return `<rect width="640" height="295" fill="${colors.sky}"/>
    <circle cx="500" cy="62" r="34" fill="#f5d56b"/>
    <path d="M0 154L110 80L214 166L310 88L420 170L530 75L640 158V295H0Z" fill="${colors.ground}"/>
    <path d="M230 295L294 132H346L414 295Z" fill="${colors.road}"/>
    <path d="M319 144V280" stroke="#fff2a8" stroke-width="7" stroke-dasharray="20 19"/>`;
}

function signalLamp(symbol) {
  const label = symbol.toUpperCase();
  const isArrow = /ARROW|LEFT|FILTER/.test(label);
  const isYellow = /YELLOW|FLASH LEFT|FILTER/.test(label);
  const activeY = isYellow ? 109 : 66;
  const activeColor = isYellow ? "#dfab37" : "#e44939";
  const arrow = label.includes("LEFT")
    ? `M329 ${activeY - 8}H305V${activeY - 20}L283 ${activeY}L305 ${activeY + 20}V${activeY + 8}H329Z`
    : `M285 ${activeY - 8}H309V${activeY - 20}L331 ${activeY}L309 ${activeY + 20}V${activeY + 8}H285Z`;

  return `<circle cx="307" cy="66" r="23" fill="#e44939" opacity=".25"/>
        <circle cx="307" cy="109" r="23" fill="#dfab37" opacity=".25"/>
        <circle cx="307" cy="152" r="23" fill="#51a76d" opacity=".25"/>
        ${isArrow ? `<path d="${arrow}" fill="${activeColor}"/>` : `<circle cx="307" cy="${activeY}" r="23" fill="${activeColor}"/>`}`;
}

function sceneLayer(kind, colors, symbol) {
  switch (kind) {
    case "document":
      return `<rect width="640" height="295" fill="${colors.sky}"/>
        <rect x="116" y="40" width="408" height="218" rx="18" fill="${colors.light}" stroke="${colors.dark}" stroke-width="5" transform="rotate(-2 320 149)"/>
        <circle cx="184" cy="120" r="37" fill="${colors.mid}"/><path d="M148 190Q184 146 220 190" fill="${colors.ground}"/>
        <path d="M252 98H460M252 132H438M252 166H474M252 200H400" stroke="${colors.dark}" stroke-width="10" stroke-linecap="round" opacity=".72"/>
        <rect x="336" y="50" width="168" height="52" rx="8" fill="${colors.accent}"/>
        ${symbolText(symbol, 420, 86, colors.light)}`;
    case "clock":
      return `<rect width="640" height="295" fill="${colors.dark}"/>
        <circle cx="320" cy="144" r="106" fill="${colors.light}" stroke="${colors.accent}" stroke-width="12"/>
        <g stroke="${colors.mid}" stroke-width="6"><path d="M320 52V72M320 216V236M228 144H248M392 144H412"/></g>
        <path d="M320 144L320 84M320 144L368 168" stroke="${colors.dark}" stroke-width="12" stroke-linecap="round"/>
        <circle cx="320" cy="144" r="10" fill="${colors.accent}"/>
        <rect x="228" y="118" width="184" height="52" rx="10" fill="${colors.dark}" opacity=".92"/>
        ${symbolText(symbol, 320, 155, colors.light)}`;
    case "signal":
      return `<rect width="640" height="295" fill="${colors.sky}"/><path d="M0 230H640V295H0Z" fill="${colors.road}"/>
        <path d="M0 262H640M320 230V295" stroke="#fff0a2" stroke-width="7" stroke-dasharray="25 20"/>
        <path d="M190 242V48H300" fill="none" stroke="${colors.dark}" stroke-width="14"/>
        <rect x="268" y="28" width="78" height="162" rx="16" fill="#172522"/>
        ${signalLamp(symbol)}
        <rect x="386" y="78" width="190" height="82" rx="12" fill="${colors.light}" stroke="${colors.dark}" stroke-width="5"/>
        ${symbolText(symbol, 481, 130, colors.dark)}`;
    case "sign":
      return `${roadPerspective(colors)}
        <path d="M145 224V92" stroke="${colors.dark}" stroke-width="11"/>
        <circle cx="145" cy="82" r="62" fill="${colors.light}" stroke="${colors.accent}" stroke-width="10"/>
        ${symbolText(symbol, 145, 96, colors.dark)}`;
    case "lanes":
      return `<rect width="640" height="295" fill="${colors.ground}"/>
        <rect x="84" width="472" height="295" fill="${colors.road}"/>
        <path d="M241 0V295M399 0V295" stroke="#f4e7a0" stroke-width="8" stroke-dasharray="26 22"/>
        <path d="M92 0V295M548 0V295" stroke="#fff" stroke-width="7"/>
        ${car(164, 88, colors.accent, 90, .9)}${car(320, 205, colors.light, -90, .9)}${car(474, 92, colors.mid, 90, .9)}
        <rect x="210" y="112" width="220" height="58" rx="10" fill="${colors.dark}" opacity=".94"/>
        ${symbolText(symbol, 320, 151, colors.light)}`;
    case "junction":
      return `<rect width="640" height="295" fill="${colors.ground}"/>
        <path d="M0 96H640V220H0ZM258 0H382V295H258Z" fill="${colors.road}"/>
        <path d="M0 158H640M320 0V295" stroke="#fff0a2" stroke-width="7" stroke-dasharray="24 20"/>
        <path d="M218 42V82M422 214V254M42 58H218M422 238H598" stroke="#fff" stroke-width="6"/>
        ${car(142, 132, colors.accent, 0, .8)}${car(348, 56, colors.mid, 90, .8)}
        <rect x="222" y="112" width="196" height="70" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 320, 157, colors.light)}`;
    case "roundabout":
      return `<rect width="640" height="295" fill="${colors.ground}"/>
        <path d="M0 121H214M426 121H640M320 0V55M320 239V295" stroke="${colors.road}" stroke-width="76"/>
        <circle cx="320" cy="147" r="114" fill="${colors.road}"/><circle cx="320" cy="147" r="54" fill="${colors.mid}"/>
        <path d="M259 90A82 82 0 0 1 384 102M390 108L372 84M380 105L408 92" fill="none" stroke="#fff0a2" stroke-width="8" stroke-linecap="round"/>
        ${car(243, 184, colors.accent, -40, .65)}
        <rect x="244" y="121" width="152" height="52" rx="10" fill="${colors.dark}"/>
        ${symbolText(symbol, 320, 156, colors.light)}`;
    case "people":
      return `<rect width="640" height="295" fill="${colors.sky}"/><rect y="190" width="640" height="105" fill="${colors.road}"/>
        <g stroke="#fff" stroke-width="13"><path d="M240 190V295M286 190V295M332 190V295M378 190V295"/></g>
        ${person(310, 151, colors.dark, .8)}${person(386, 158, colors.accent, .65)}${car(118, 236, colors.mid, 0, 1)}
        <rect x="405" y="61" width="198" height="68" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 504, 106, colors.light)}`;
    case "vehicle":
      return `${roadPerspective(colors)}
        ${car(320, 231, colors.accent, 0, 1.25)}${car(385, 166, colors.mid, 0, .65)}
        <rect x="76" y="54" width="224" height="66" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 188, 98, colors.light)}`;
    case "parking":
      return `<rect width="640" height="295" fill="${colors.ground}"/><rect x="0" y="66" width="640" height="176" fill="${colors.road}"/>
        <path d="M0 74H640M0 234H640" stroke="${colors.light}" stroke-width="8"/>
        <path d="M120 74V234M300 74V234M480 74V234" stroke="${colors.light}" stroke-width="5"/>
        ${car(210, 154, colors.accent, 0, 1.4)}
        <path d="M108 255H312M108 246V264M312 246V264" stroke="${colors.dark}" stroke-width="6"/>
        <rect x="360" y="111" width="238" height="74" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 479, 159, colors.light)}`;
    case "weather":
      return `${roadPerspective(colors)}
        <g stroke="#eaf5f3" stroke-width="5" opacity=".8"><path d="M50 35L30 80M105 20L80 76M170 38L145 95M465 25L440 80M548 36L520 96M612 18L584 76"/></g>
        <path d="M0 190H640" stroke="#eef7f1" stroke-width="18" opacity=".25"/>
        <rect x="55" y="48" width="245" height="70" rx="12" fill="${colors.dark}" opacity=".94"/>
        ${symbolText(symbol, 178, 94, colors.light)}${car(350, 231, colors.accent, 0, 1.05)}`;
    case "emergency":
      return `${roadPerspective(colors)}
        ${car(340, 229, colors.light, 0, 1.15)}
        <rect x="300" y="192" width="80" height="12" rx="6" fill="#2c72c7"/><circle cx="320" cy="190" r="18" fill="#52a2ff" opacity=".8"/><circle cx="360" cy="190" r="18" fill="#e95043" opacity=".8"/>
        <path d="M154 239L196 163L238 239Z" fill="${colors.accent}" stroke="${colors.light}" stroke-width="7"/>
        <rect x="52" y="53" width="252" height="70" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 178, 99, colors.light)}`;
    case "rail":
      return `<rect width="640" height="295" fill="${colors.ground}"/><rect x="0" y="103" width="640" height="110" fill="${colors.road}"/>
        <g transform="rotate(-18 320 148)"><path d="M0 88H640M0 208H640" stroke="#3a2d29" stroke-width="13"/><path d="M20 92V204M70 92V204M120 92V204M170 92V204M220 92V204M270 92V204M320 92V204M370 92V204M420 92V204M470 92V204M520 92V204M570 92V204M620 92V204" stroke="#d3b276" stroke-width="10"/></g>
        <path d="M130 52V183M130 78L258 146" stroke="${colors.dark}" stroke-width="12"/><circle cx="130" cy="48" r="28" fill="${colors.accent}"/>
        <rect x="350" y="39" width="234" height="68" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 467, 84, colors.light)}`;
    case "mountain":
      return `<rect width="640" height="295" fill="${colors.sky}"/><path d="M0 220L144 50L255 205L390 31L544 214L640 110V295H0Z" fill="${colors.mid}"/>
        <path d="M146 50L180 101L128 90ZM390 31L436 94L370 80Z" fill="${colors.light}"/>
        <path d="M40 295Q155 190 270 246T600 166" fill="none" stroke="${colors.road}" stroke-width="52"/>
        <path d="M40 295Q155 190 270 246T600 166" fill="none" stroke="#fff0a2" stroke-width="5" stroke-dasharray="22 18"/>
        <rect x="55" y="53" width="238" height="68" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 174, 98, colors.light)}`;
    case "dashboard":
      return `<rect width="640" height="295" fill="${colors.sky}"/><path d="M0 226Q320 116 640 226V295H0Z" fill="${colors.dark}"/>
        <circle cx="170" cy="232" r="92" fill="none" stroke="${colors.light}" stroke-width="17"/><circle cx="170" cy="232" r="23" fill="${colors.accent}"/>
        <circle cx="430" cy="182" r="74" fill="${colors.road}" stroke="${colors.light}" stroke-width="8"/><path d="M430 182L468 137" stroke="${colors.accent}" stroke-width="10"/>
        <rect x="253" y="45" width="300" height="78" rx="13" fill="${colors.light}" stroke="${colors.dark}" stroke-width="5"/>
        ${symbolText(symbol, 403, 96, colors.dark)}`;
    case "phone":
      return `<rect width="640" height="295" fill="${colors.dark}"/><path d="M0 240Q320 120 640 240V295H0Z" fill="${colors.road}"/>
        <rect x="225" y="32" width="190" height="228" rx="25" fill="${colors.light}" stroke="${colors.accent}" stroke-width="10"/>
        <rect x="250" y="65" width="140" height="132" rx="10" fill="${colors.sky}"/>
        ${symbolText(symbol, 320, 139, colors.dark)}<circle cx="320" cy="226" r="12" fill="${colors.mid}"/>
        <path d="M190 40L450 266" stroke="${colors.accent}" stroke-width="14" opacity=".88"/>`;
    case "seat":
      return `<rect width="640" height="295" fill="${colors.sky}"/><path d="M102 244V86Q102 48 140 48H236Q274 48 274 86V244Z" fill="${colors.mid}" stroke="${colors.dark}" stroke-width="7"/>
        <path d="M108 64L270 236" stroke="#f6d26b" stroke-width="16"/><rect x="258" y="218" width="34" height="42" rx="7" fill="${colors.accent}"/>
        <path d="M390 238V120Q390 84 426 84H498Q534 84 534 120V238Z" fill="${colors.light}" stroke="${colors.dark}" stroke-width="7"/>
        <circle cx="462" cy="127" r="29" fill="${colors.accent}"/><path d="M422 182H502" stroke="${colors.dark}" stroke-width="13"/>
        <rect x="320" y="35" width="264" height="62" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 452, 77, colors.light)}`;
    case "alcohol":
      return `<rect width="640" height="295" fill="${colors.light}"/>
        <path d="M94 58H236L214 184Q208 220 165 220T116 184Z" fill="${colors.sky}" stroke="${colors.dark}" stroke-width="8"/><path d="M165 220V264M114 264H216" stroke="${colors.dark}" stroke-width="10"/>
        <circle cx="165" cy="145" r="102" fill="none" stroke="${colors.accent}" stroke-width="15"/><path d="M92 72L238 218" stroke="${colors.accent}" stroke-width="15"/>
        <path d="M300 295L384 104H434L520 295Z" fill="${colors.road}"/><path d="M410 120V278" stroke="#fff0a2" stroke-width="7" stroke-dasharray="20 18"/>
        <rect x="316" y="41" width="270" height="66" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 451, 85, colors.light)}`;
    case "insurance":
      return `<rect width="640" height="295" fill="${colors.sky}"/><rect x="72" y="38" width="316" height="224" rx="14" fill="${colors.light}" stroke="${colors.dark}" stroke-width="6"/>
        <path d="M110 88H322M110 126H284M110 164H322M110 202H248" stroke="${colors.mid}" stroke-width="11" stroke-linecap="round"/>
        <path d="M470 53L556 86V151Q556 221 470 258Q384 221 384 151V86Z" fill="${colors.dark}" stroke="${colors.accent}" stroke-width="10"/>
        ${symbolText(symbol, 470, 168, colors.light)}`;
    case "crash":
      return `<rect width="640" height="295" fill="${colors.ground}"/><rect x="0" y="68" width="640" height="180" fill="${colors.road}"/>
        ${car(248, 149, colors.accent, 18, 1.25)}${car(392, 149, colors.light, -18, 1.25)}
        <path d="M320 94L335 126L370 112L350 146L382 164L344 168L350 207L320 183L290 207L296 168L258 164L290 146L270 112L305 126Z" fill="#f7ce4f" stroke="${colors.dark}" stroke-width="5"/>
        <rect x="175" y="25" width="290" height="61" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 320, 67, colors.light)}`;
    case "border":
      return `${roadPerspective(colors)}
        <path d="M0 143H640" stroke="${colors.light}" stroke-width="8" stroke-dasharray="18 14"/>
        <rect x="72" y="52" width="226" height="89" rx="12" fill="${colors.dark}" stroke="${colors.light}" stroke-width="5"/>
        ${symbolText(symbol, 185, 108, colors.light)}
        <rect x="430" y="55" width="55" height="70" fill="${colors.mid}"/><rect x="485" y="55" width="55" height="70" fill="${colors.light}"/><rect x="540" y="55" width="55" height="70" fill="${colors.accent}"/>`;
    case "map":
      return `<rect width="640" height="295" fill="${colors.light}"/><path d="M0 60L155 20L300 66L468 20L640 72V260L480 282L310 246L156 282L0 246Z" fill="${colors.sky}" opacity=".65"/>
        <path d="M78 210C148 70 254 255 322 116S486 230 570 70" fill="none" stroke="${colors.accent}" stroke-width="14" stroke-linecap="round" stroke-dasharray="2 24"/>
        <circle cx="78" cy="210" r="16" fill="${colors.dark}"/><circle cx="570" cy="70" r="20" fill="${colors.dark}"/>
        <rect x="190" y="104" width="260" height="74" rx="12" fill="${colors.dark}"/>
        ${symbolText(symbol, 320, 153, colors.light)}`;
    case "tunnel":
      return `<rect width="640" height="295" fill="${colors.sky}"/><path d="M44 295V171Q44 32 320 32T596 171V295Z" fill="${colors.dark}"/>
        <path d="M118 295V178Q118 92 320 92T522 178V295Z" fill="#172523"/>
        <path d="M225 295L294 132H346L416 295Z" fill="${colors.road}"/><path d="M320 145V282" stroke="#fff0a2" stroke-width="7" stroke-dasharray="18 17"/>
        <g fill="#f8d976"><circle cx="171" cy="154" r="9"/><circle cx="469" cy="154" r="9"/><circle cx="207" cy="113" r="8"/><circle cx="433" cy="113" r="8"/></g>
        <rect x="218" y="46" width="204" height="62" rx="11" fill="${colors.accent}"/>
        ${symbolText(symbol, 320, 88, colors.light)}`;
    default:
      throw new Error(`Unknown visual kind: ${kind}`);
  }
}

function wrapCue(cue) {
  const words = cue.split(" ");
  const lines = [""];
  for (const word of words) {
    const current = lines.at(-1);
    if (`${current} ${word}`.trim().length > 42 && lines.length < 2) lines.push(word);
    else lines[lines.length - 1] = `${current} ${word}`.trim();
  }
  return lines;
}

function renderSvg(card, spec, region) {
  const palette = palettes[hashString(`${region}:${card.id}`) % palettes.length];
  const cueLines = wrapCue(spec.cue);
  const cueText = cueLines.map((line, index) => `<tspan x="32" dy="${index ? 23 : 0}">${escapeXml(line)}</tspan>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" data-card-id="${escapeXml(card.id)}" role="img" aria-labelledby="title-${escapeXml(card.id)}">
  <title id="title-${escapeXml(card.id)}">${escapeXml(card.title)} — ${escapeXml(spec.cue)}</title>
  ${sceneLayer(spec.kind, palette, spec.symbol)}
  <rect y="295" width="640" height="65" fill="${palette.dark}"/>
  <text x="608" y="323" fill="${palette.accent}" font-family="Arial, sans-serif" font-size="12" font-weight="800" text-anchor="end" letter-spacing="1.5">${escapeXml(region.toUpperCase())} · ${escapeXml(spec.kind.toUpperCase())}</text>
  <text x="32" y="320" fill="${palette.light}" font-family="Arial, sans-serif" font-size="17" font-weight="700">${cueText}</text>
</svg>
`;
}

function validate(cards, visuals, label) {
  const cardIds = cards.map((card) => card.id);
  const visualIds = Object.keys(visuals);
  const missing = cardIds.filter((id) => !visuals[id]);
  const extra = visualIds.filter((id) => !cardIds.includes(id));
  const invalid = visualIds.filter((id) => !visuals[id].kind || !visuals[id].symbol || !visuals[id].cue);
  const duplicateCues = visualIds.filter((id, index) => visualIds.findIndex((other) => visuals[other].cue === visuals[id].cue) !== index);
  if (missing.length || extra.length || invalid.length || duplicateCues.length) {
    throw new Error(`${label} visual manifest invalid\nmissing: ${missing}\nextra: ${extra}\ninvalid: ${invalid}\nduplicate cues: ${duplicateCues}`);
  }
}

function generateSet({ label, region, cards, visuals, outputDirectory }) {
  validate(cards, visuals, label);
  const absoluteOutput = path.join(root, outputDirectory);
  const expectedNames = new Set(cards.map((card) => `${card.id}.svg`));
  const stale = [];

  if (!checkOnly) fs.mkdirSync(absoluteOutput, { recursive: true });

  for (const card of cards) {
    const filename = path.join(absoluteOutput, `${card.id}.svg`);
    const expected = renderSvg(card, visuals[card.id], region);
    if (checkOnly) {
      if (!fs.existsSync(filename) || fs.readFileSync(filename, "utf8") !== expected) stale.push(card.id);
    } else {
      fs.writeFileSync(filename, expected);
    }
  }

  if (fs.existsSync(absoluteOutput)) {
    const extras = fs.readdirSync(absoluteOutput).filter((name) => name.endsWith(".svg") && !expectedNames.has(name));
    if (extras.length) throw new Error(`${label} has unexpected generated visuals: ${extras.join(", ")}`);
  }

  if (stale.length) throw new Error(`${label} has missing or stale generated visuals: ${stale.join(", ")}`);
  console.log(`${label}: ${cards.length} card visuals ${checkOnly ? "verified" : "generated"}`);
}

const california = loadCurriculum("cards.js", "visuals.js", null, "ROAD_CARDS", "ROAD_VISUALS");
const europe = loadCurriculum("europe/cards.js", "europe/visuals.js", "EUROPE_DRIVING", "cards", "EUROPE_VISUALS");

generateSet({ label: "California", region: "CA", ...california, outputDirectory: "assets/card-visuals" });
generateSet({ label: "Europe", region: "EUROPE", ...europe, outputDirectory: "europe/assets/card-visuals" });
