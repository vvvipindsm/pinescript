//@version = 5
indicator("Estimate, Earnings, Surprise Earnings", precision=2,overlay = true)

symbol = syminfo.tickerid
actual = request.earnings(symbol, earnings.actual)
estimation = request.earnings(symbol, earnings.estimate)
surprise = actual - estimation
standardized = request.earnings(symbol, earnings.standardized)
label= label.new( bar_index, high,
                      text= str.tostring((estimation-actual>0)?"G":"L"),  
                      color=color.white, 
                      textcolor= color.green,
                      style =  label.style_none,
                      yloc = yloc.abovebar)