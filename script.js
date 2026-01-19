function dec_to_hex_example(r, g, b) {
    let hexR = r.toString(16).padStart(2, '0'),
        hexG = g.toString(16).padStart(2, '0'),
        hexB = b.toString(16).padStart(2, '0');
    return 'rgb(' + String(r) + ', ' + String(g) + ', ' + String(b) + ') → #' + hexR + hexG + hexB;
    // return `rgb(${r}, ${g}, ${b}) → #${hexR}${hexG}${hexB}`;
  }
  
  function hex_to_dec_example(hexR, hexG, hexB) {
    let r = parseInt(hexR, 16),
        g = parseInt(hexG, 16),
        b = parseInt(hexB, 16);
    return '#' + hexR + hexG + hexB + ' → rgb(' + String(r) + ', ' + String(g) + ', ' + String(b) + ')';
    // return `#${hexR}${hexG}${hexB} → rgb(${r}, ${g}, ${b})`;
  }