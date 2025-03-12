/*
Welcome to your Dashboard's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions


dashboard.on('widgetrefreshed', function (se, ev) {

	widgetList = ['63e4a5879bd1f80036ab7733']
	
	if(widgetList.includes(ev.widget.oid))
	{
		$(`widget[widgetid="${ev.widget.oid}"]`).closest('.dashboard-layout-subcell-host').addClass('dontshowme-parent')
	}
});

*/
