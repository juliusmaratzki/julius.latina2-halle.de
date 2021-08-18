var jetzt = new Date();
                var Std = jetzt.getHours();
                if (Std >= 5 && Std < 10) {
                 document.write("Guten Morgen, willkommen auf julius.latina2-halle.de!");
                } else if (Std >= 10 && Std < 18) {
                  document.write("Guten Tag, willkommen auf julius.latina2-halle.de!");
                } else if (Std >= 18 && Std <= 23) {
                  document.write("Guten Abend, willkommen auf julius.latina2-halle.de!");
                } else if (Std >= 23 && Std < 5) {
                  document.write("Gute Nacht, willkommen auf julius.latina2-halle.de!");
                }