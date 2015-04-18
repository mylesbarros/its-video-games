var pageMod = require("sdk/page-mod");
var contentScriptUrl = "./content_script.js";

pageMod.PageMod({
    include: "*",
    contentScriptFile: contentScriptUrl
});
