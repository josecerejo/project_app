Ext.define('project_app.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'project_app.view.Header',
        'project_app.view.Menu'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{ 
        region: 'north',
        border: false,
        height: 60,
        xtype: 'app-header' 
    },{
        region: 'west',
        xtype: 'app-menu'   
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Center Tab 1'
        }]
    }]
});