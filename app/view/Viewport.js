Ext.define('project_app.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[    
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'project_app.view.Header',
        'project_app.view.Menu',
        'project_app.view.Footer'
    ],

    layout: {
        type: 'border'
    },

    items: [{ 
        region: 'north',
        border: false,
        height: 34,
        xtype: 'app-header' 
    },{
        region: 'west',
        xtype: 'app-menu'   
    },{
        region: 'center',
        bodyCls: 'icon-square',
        xtype: 'tabpanel'       
    },{ 
        region: 'south',
        border: false,
        height: 15,
        xtype: 'app-footer' 
    }]
});
