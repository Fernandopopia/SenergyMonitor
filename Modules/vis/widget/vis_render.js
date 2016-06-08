/*
   All emon_widgets code is released under the GNU General Public License v3.
   See COPYRIGHT.txt and LICENSE.txt.

   Part of the OpenEnergyMonitor project:
   http://openenergymonitor.org

   Author: Trystan Lea: trystan.lea@googlemail.com
   If you have any questions please get in touch, try the forums here:
   http://openenergymonitor.org/emon/forum
 */

function vis_widgetlist(){
  var widgets = {
    "realtime":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["feedid"],
      "optionstype":["feedid"],
      "optionsname":[_Tr("Feed")],
      "optionshint":[_Tr("Feed source")],
      "html":""
    },

    "rawdata":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",  
      "options":["feedid","colour","units","dp","scale","fill"],
      "optionstype":["feedid","colour_picker","value","value","value","value"],
      "optionsname":[_Tr("Feed"),_Tr("Colour"),_Tr("units"),_Tr("dp"),_Tr("scale"),_Tr("Fill")],
      "optionshint":[_Tr("Feed source"),_Tr("Line colour in hex. Blank is use default."),_Tr("units"),_Tr("Decimal points"),_Tr("Scale by"),_Tr("Fill value")],
      
      "html":""
    },
    
    "bargraph":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["feedid","colour","interval","units","dp","scale","delta","mode"],
      "optionstype":["feedid","colour_picker","value","value","value","value","value","value"],
      "optionsname":[_Tr("Feed"),_Tr("Colour"),_Tr("interval"),_Tr("units"),_Tr("dp"),_Tr("scale"),_Tr("delta"),_Tr("mode")],
      "optionshint":[_Tr("Feed source"),_Tr("Line colour in hex. Blank is use default."),_Tr("Interval (seconds)-you can set \"d\" for day, \"m\" for month, or \"y\" for year"),_Tr("Units"),_Tr("Decimal points"),_Tr("Scale by"),_Tr("St to \"1\" to show diff between each bar. It displays an ever-increasing Wh feed as a daily\/montly\/yeayly kWh feed (set interval to \"d\", or \"m\", or \"y\")"),"Mode set to 'daily' can be used instead of interval for timezone based daily data"],
      "html":""
    },

    "timestoredaily":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["feedid","units"],
      "optionstype":["feedid","value"],
      "optionsname":[_Tr("Feed"),_Tr("Units")],
      "optionshint":[_Tr("Feed source"),_Tr("Units to show")],
      "html":""
    },

    "zoom":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["power","kwhd","currency","currency_after_val","pricekwh","delta"],
      "optionstype":["feedid","feedid","value","value","value","value"],
      "optionsname":[_Tr("Power"),_Tr("kwhd"),_Tr("Currency"),_Tr("Currency position"),_Tr("Kwh price"),_Tr("delta")],
      "optionshint":[_Tr("Power to show"),_Tr("kwhd source"),_Tr("Currency to show"),_Tr("0 = before value, 1 = after value"),_Tr("Set kwh price"),_Tr("St to \"1\" to show diff between each bar. It displays an ever-increasing Wh feed as a daily\/montly\/yeayly kWh feed (set interval to \"d\", or \"m\", or \"y\")")],
      "html":""
    },

    "simplezoom":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["power","kwhd","delta"],
      "optionstype":["feedid","feedid","value"],
      "optionsname":[_Tr("Power"),_Tr("kwhd"),_Tr("delta")],
      "optionshint":[_Tr("Power to show"),_Tr("kwhd source"),_Tr("St to \"1\" to show diff between each bar. It displays an ever-increasing Wh feed as a daily\/montly\/yeayly kWh feed (set interval to \"d\", or \"m\", or \"y\")")],
      "html":""
    },

    "histgraph":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["feedid"],
      "optionstype":["feedid"],
      "optionsname":[_Tr("Feed")],
      "optionshint":[_Tr("Feed source")],
      "html":""
    },

    "threshold":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["feedid","thresholdA","thresholdB"],
      "optionstype":["feedid","value","value"],
      "optionsname":[_Tr("Feed"),_Tr("Threshold A"),_Tr("Threshold B")],
      "optionshint":[_Tr("Feed source"),_Tr("Threshold A used"),_Tr("Threshold B used")],
      "html":""
    },

    "orderthreshold":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["feedid","power","thresholdA","thresholdB"],
      "optionstype":["feedid","feedid","value","value"],
      "optionsname":[_Tr("Feed"),_Tr("Power"),_Tr("Threshold A"),_Tr("Threshold B")],
      "optionshint":[_Tr("Feed source"),_Tr("Power"),_Tr("Threshold A used"),_Tr("Threshold B used")],
      "html":""
    },

    "orderbars":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["feedid","delta"],
      "optionstype":["feedid","value"],
      "optionsname":[_Tr("Feed"),_Tr("delta")],
      "optionshint":[_Tr("Feed source"),_Tr("St to \"1\" to show diff between each bar. It displays an ever-increasing Wh feed as a daily\/montly\/yeayly kWh feed (set interval to \"d\", or \"m\", or \"y\")")],
      "html":""
    },

    "stacked":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["bottom","top","colourt","colourb","delta"],
      "optionstype":["feedid","feedid","colour_picker","colour_picker","value"],
      "optionsname":[_Tr("Bottom"),_Tr("Top"),_Tr("Top colour"),_Tr("Bottom colour"),_Tr("delta")],
      "optionshint":[_Tr("Bottom feed value"),_Tr("Top feed value"),_Tr("Top colour"),_Tr("Bottom colour"),_Tr("St to \"1\" to show diff between each bar. It displays an ever-increasing Wh feed as a daily\/montly\/yeayly kWh feed (set interval to \"d\", or \"m\", or \"y\")")],
      "html":""
    },

    "stackedsolar":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["solar","consumption","delta"],
      "optionstype":["feedid","feedid","value"],
      "optionsname":[_Tr("Solar"),_Tr("Consumption"),_Tr("delta")],
      "optionshint":[_Tr("Solar feed value"),_Tr("Consumption feed value"),_Tr("St to \"1\" to show diff between each bar. It displays an ever-increasing Wh feed as a daily\/montly\/yeayly kWh feed (set interval to \"d\", or \"m\", or \"y\")")],
      "html":""
    },

    "smoothie":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["feedid","ufac"],
      "optionstype":["feedid","value"],
      "optionsname":[_Tr("Feed"),_Tr("Ufac")],
      "optionshint":[_Tr("Feed source"),_Tr("Ufac value")],
      "html":""
    },

    "multigraph":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",
      "options":["mid"],
      "optionstype":["dropbox"],
      "optionsname":[_Tr("Multigraph")],
      "optionshint":[_Tr("Managed on Visualization module")],
      "optionsdata":[multigraphsDropBoxOptions], // Gets multigraphs from vis_widget.php multigraphsDropBoxOptions variable
      "html":""
    },

    "timecompare":
    {
      "offsetx":0,"offsety":0,"width":400,"height":300,
      "menu":"Visualisations",  
      "options":["feedid","fill","depth","npoints"],
      "optionstype":["feedid","value","value","value"],
      "optionsname":[_Tr("Feed"),_Tr("Fill"),_Tr("Depth"),_Tr("Data points")],
      "optionshint":[_Tr("Feed source"),_Tr("Fill under line"),_Tr("Number of lines"),_Tr("Default: 800")],
      "html":""
    }
  }

  return widgets;
}

function vis_init(){
  vis_draw();
}

function vis_draw(){
  var vislist = vis_widgetlist();

  var visclasslist = '';
  for (z in vislist) { visclasslist += '.'+z+','; }
  visclasslist = visclasslist.slice(0, -1);

  $(visclasslist).each(function(){
    var id = $(this).attr("id");
    var feed = $(this).attr("feed") || 0;
    var width = $(this).width();
    var height = $(this).height();

    var apikey_string = "";
    if (apikey) apikey_string = "&apikey="+apikey;

    if (!$(this).html() || reloadiframe==id || reloadiframe==-1 || apikey){
        var attrstring = "";
        var target = $(this).get(0);
        var l = target.attributes.length;
        for (var i=0; i<l; i++){
          var attr = target.attributes[i].name;
          if (attr!="id" && attr!="class" && attr!="style"){
            attrstring += "&"+attr+"="+target.attributes[i].value;
          }
        }
        pathfix=path.substr(path.indexOf('://')+3); // remove protocol
        pathfix=pathfix.substr(pathfix.indexOf('/')); // remove hostname
        $(this).html('<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="'+pathfix+'vis/'+$(this).attr("class")+'?embed=1'+attrstring+apikey_string+'"></iframe>');
        console.log('--> new relative url for iframe of '+ $(this).attr("class") + ': '+pathfix+'vis/'+$(this).attr("class")+'?embed=1'+attrstring+apikey_string);
    }

    var iframe = $(this).children('iframe');
    iframe.width(width);
    iframe.height(height);

  });
  reloadiframe = 0;
}

function vis_slowupdate() {}

function vis_fastupdate() {}
