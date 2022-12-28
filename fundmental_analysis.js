//@version = 5
indicator("Estimate, Earnings, Surprise Earnings", precision=2,overlay = true)

symbol = syminfo.tickerid
actual = request.earnings(symbol, earnings.actual)
estimation = request.earnings(symbol, earnings.estimate)
surprise = actual - estimation
earning_diff = estimation-actual
standardized = request.earnings(symbol, earnings.standardized)
label= label.new( bar_index, high,
                      text= str.tostring((estimation-actual>0)?earning_diff!=earning_diff[1]?"D":"N":"L"),  
                      color=color.white, 
                      textcolor= color.green,
                      style =  label.style_none,
                      yloc = yloc.abovebar)
// plot(estimation, title="Estimated Earnings", color=#FFFFFF, linewidth= 2, style=plot.style_stepline)
// plot(actual, title="Reported Earnings", color=(actual >= 0 ? color.new(#3861f6, 40) : color.new(#613cb0, 40)), style=plot.style_columns)
// plot(surprise, title="Earning Surprise", color=(surprise >= 0 ? color(#52a49a) : color(#dd5e56)), style=plot.style_columns)
// plot(standardized, title="Standardized Earnings", color=(standardized >= 0 ? color.new(#3861f6, 40) : color.new(#613cb0, 40)), style=plot.style_columns, display=display.none)