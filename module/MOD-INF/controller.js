function init() {
  var GRefineServlet = Packages.com.google.refine.RefineServlet;
  
  GRefineServlet.registerCommand(module, "upload-to-ckan", new com.google.refine.net.ckan.storage.commands.UploadToCKANCommand());
  GRefineServlet.registerCommand(module, "get-package-details", new com.google.refine.net.ckan.storage.commands.GetPackageDetailsCommand());
  
  
  var ClientSideResourceManager = Packages.com.google.refine.ClientSideResourceManager;
  ClientSideResourceManager.addPaths(
          "project/styles",
          module,
          [
           "styles/style.css"
          ]
          );
  
  ClientSideResourceManager.addPaths(
    		"project/scripts",
    		module,
    		[
      		 	"scripts/ckan-storage.js",
      		 	"scripts/templating-exporter-dialog.js"
    		]
    	);
}

