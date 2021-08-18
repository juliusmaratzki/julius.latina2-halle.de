var jetzt = new Date();
                var Std = jetzt.getHours();
                if (Std >= 5 && Std < 10) {
                 document.write("Guten Morgen, wie können wir Ihnen helfen?");
                } else if (Std >= 10 && Std < 18) {
                  document.write("Guten Tag, wie können wir Ihnen helfen?");
                } else if (Std >= 18 && Std <= 23) {
                  document.write("Guten Abend, wie können wir Ihnen helfen?");
                } else if (Std >= 23 && Std < 5) {
                  document.write("Gute Nacht, wie können wir Ihnen helfen?");
                }