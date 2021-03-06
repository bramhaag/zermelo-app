/* 
 * This file is part of the Zermelo App.
 * 
 * Copyright (c) Zermelo Software B.V. and contributors
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// This class contains information related to appointment details which is set into calendar.
Ext.define('Zermelo.view.AppointmentDetails', {
    extend: 'Ext.Container',
    xtype: 'appointmentDetails',
    id: 'appointmentDetails_view',
    config: {
        listeners: {
            //show event of view
            show: function() {
                appointment_detail_open = true;
                thisObj = this;
               // console.log(eventDetails);
                var multipleids = [];
                if (eventDetails.multiid.length != 0)
                    multipleids = eventDetails.multiid.split(",");
                else
                    multipleids[0] = String(eventDetails.id);
               // console.log(multipleids.length);

                for (i = 0; i < multipleids.length; i++) {

                    resultObject = search(multipleids[i], eventArray);
                   // console.log(resultObject);
                    var container = Ext.create('Ext.Container', {
                        style: {
                            'font-size': '14px'
                        },
                        // padding top left bottom right
                        padding: '20 20 10 20',

                        items: [{
                                // teacher container with horizontal box
                                xtype: 'container',
                                layout: 'hbox',
                                style: {
                                    'margin-bottom': '10px'
                                },
                                items: [{
                                        //teacher label
                                        xtype: 'label',
                                        flex: 1,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                        //multiple language
                                        locales: {
                                            html: 'appointment.teacher',
                                        },
                                    }, {
                                        // teacher value label
                                        xtype: 'label',
                                        flex: 1.5,
                                        id: 'appointmentDetails_teacher_value_lbl',
                                        // css class resouces/css/app.css
                                        html: resultObject.teacher,
                                        cls: 'zermelo-announcement-label',
                                    }]
                                    //end teacher container   
                            }, {
                                // subject container with horizontal box
                                xtype: 'container',
                                layout: 'hbox',
                                style: {
                                    'margin-bottom': '10px'
                                },
                                items: [{
                                        // subject label
                                        xtype: 'label',
                                        flex: 1,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                        //multiple language
                                        locales: {
                                            html: 'appointment.subject',
                                        },
                                    }, {
                                        // subject value label
                                        xtype: 'label',
                                        flex: 1.5,
                                        id: 'appointmentDetails_subject_value_lbl',
                                        html: resultObject.subject,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                    }]
                                    // end subject container
                            }, {
                                // room container with horizontal box
                                xtype: 'container',
                                layout: 'hbox',
                                style: {
                                    'margin-bottom': '10px'
                                },
                                items: [{
                                        //room lebel
                                        xtype: 'label',
                                        flex: 1,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                        //multiple language
                                        locales: {
                                            html: 'appointment.room',
                                        },
                                    }, {
                                        //room value lebel
                                        xtype: 'label',
                                        flex: 1.5,
                                        id: 'appointmentDetails_room_value_lbl',
                                        html: resultObject.locations,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                    }]
                                    //end room container
                            }, {
                                // group container with horizontal box
                                xtype: 'container',
                                layout: 'hbox',
                                style: {
                                    'margin-bottom': '10px'
                                },
                                items: [{
                                        //group label
                                        xtype: 'label',
                                        flex: 1,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                        //multiple language
                                        locales: {
                                            html: 'appointment.group',
                                        },
                                    }, {
                                        // group value label
                                        xtype: 'label',
                                        id: 'appointmentDetails_group_value_lbl',
                                        flex: 1.5,
                                        html: resultObject.groups,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                    }]
                                    //end group container
                            }, {
                                // type container with horizontal box
                                xtype: 'container',
                                layout: 'hbox',
                                id: 'container_type',
                                style: {
                                    'margin-bottom': '10px'
                                },
                                items: [{
                                        //type label
                                        xtype: 'label',
                                        flex: 1,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                        //multiple language
                                        locales: {
                                            html: 'appointment.type',
                                        },
                                    },{
                                         xtype: 'label',
                                        id: 'appointmentDetails_type_value_lbl',
                                        flex: 1.5,
                                         // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                        locales: {
                                             html: 'type.' + resultObject.type
                                        }
                                    }]
                                    //end type container
                            }, {
                                // Starttime container with horizontal box
                                xtype: 'container',
                                layout: 'hbox',
                                style: {
                                    'margin-bottom': '10px'
                                },
                                items: [{
                                        //starttime label
                                        xtype: 'label',
                                        flex: 1,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                        //multiple language
                                        locales: {
                                            html: 'appointment.startTime',
                                        },
                                    }, {
                                        //starttime value label
                                        xtype: 'label',
                                        flex: 1.5,
                                        id: 'appointmentDetails_start_time_value_lbl',
                                        // css class resouces/css/app.css
                                        html: Ext.Date.format(new Date(resultObject.start), 'd M. Y H:i'),
                                        cls: 'zermelo-announcement-label',
                                    }]
                                    //end starttime container
                            }, {
                                // end time container with horizontal box
                                xtype: 'container',
                                layout: 'hbox',
                                style: {
                                    'margin-bottom': '20px'
                                },
                                items: [{
                                        // endtime label
                                        xtype: 'label',
                                        flex: 1,
                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                        //multiple language
                                        locales: {
                                            html: 'appointment.endTime',
                                        },
                                    }, {
                                        //endtime value label
                                        xtype: 'label',
                                        flex: 1.5,
                                        id: 'appointmentDetails_End_time_value_lbl',
                                        html: Ext.Date.format(new Date(resultObject.end), 'd M. Y H:i'),

                                        // css class resouces/css/app.css
                                        cls: 'zermelo-announcement-label',
                                    }]
                                    //end endtime container
                            }, {
                                // remark label
                                xtype: 'label',
                                id: 'appointmentDetails_remarks_lbl',
                                style: {
                                    'margin-bottom': '10px'
                                },
                                //multiple language
                                locales: {
                                    html: 'appointment.remark',
                                },
                            }, {
                                //remark value label
                                xtype: 'label',
                                id: 'appointmentDetails_remarks_value_lbl',
                                style: {
                                    'margin-bottom': '20px'
                                },
                            }, {
                                //description label
                                xtype: 'label',
                                id: 'appointmentDetails_description_lbl',
                                style: {
                                    'margin-bottom': '10px'
                                },
                                //multiple language
                                locales: {
                                    html: 'appointment.changeDescription',
                                },
                            }, {
                                //description value label
                                xtype: 'label',
                                id: 'appointmentDetails_description_value_lbl',
                                style: {
                                    'margin-bottom': '20px'
                                },
                            },
                            {
                                xtype:'container',
                                html:'<hr></hr>'
                            }
                            ] //end body container


                    });
                     
                    
                    Ext.getCmp('details').add(container);
                    if (resultObject.remark.length == 0) {
                         Ext.getCmp('appointmentDetails_remarks_value_lbl').setHidden(true);
                         Ext.getCmp('appointmentDetails_remarks_lbl').setHidden(true);
                     } else {
                         Ext.getCmp('appointmentDetails_remarks_value_lbl').setHtml(resultObject.remark);
                         Ext.getCmp('appointmentDetails_remarks_value_lbl').setHidden(false);
                         Ext.getCmp('appointmentDetails_remarks_lbl').setHidden(false);
                     }

                     // if description is available then display otherwise hide
                     if (resultObject.change_description.length == 0) {
                         Ext.getCmp('appointmentDetails_description_value_lbl').setHidden(true);
                         Ext.getCmp('appointmentDetails_description_lbl').setHidden(true);
                     } else {
                         Ext.getCmp('appointmentDetails_description_value_lbl').setHidden(false);
                         Ext.getCmp('appointmentDetails_description_lbl').setHidden(false);
                         Ext.getCmp('appointmentDetails_description_value_lbl').setHtml(resultObject.change_description);

                     }
                    /* // remove label from container
                     Ext.getCmp('container_type').removeAt(1);
                     // remove type label in container for display type of appointment in multi language
                     Ext.getCmp('container_type').add({
                         xtype: 'label',
                         id: 'appointmentDetails_type_value_lbl',
                         flex: 1.5,
                         // css class resouces/css/app.css
                         cls: 'zermelo-announcement-label',
                         locales: {
                             html: 'type.' + resultObject.type
                         }
                     });*/
                }
                /* // set values
                 Ext.getCmp('appointmentDetails_teacher_value_lbl').setHtml(eventDetails.teacher);
                 Ext.getCmp('appointmentDetails_subject_value_lbl').setHtml(eventDetails.subject);
                 Ext.getCmp('appointmentDetails_room_value_lbl').setHtml(eventDetails.locations);
                 Ext.getCmp('appointmentDetails_group_value_lbl').setHtml(eventDetails.groups);
                 //Ext.getCmp('appointmentDetails_type_value_lbl').setHtml(eventDetails.type);
                 */
                /*Ext.getCmp('appointmentDetails_start_time_value_lbl').setHtml(Ext.Date.format(new Date(eventDetails.start), 'd M. Y H:i'));
                Ext.getCmp('appointmentDetails_End_time_value_lbl').setHtml(Ext.Date.format(new Date(eventDetails.end), 'd M. Y H:i'));*/
                // if remarks is available then display otherwise hide

                  Ext.getCmp('details').getScrollable().getScroller().scrollTo(0, 0);
            }, //end show
            hide: function() {
                   Ext.getCmp('details').removeAll();
                } //end hide
        },
        // end listeners,
        // set vertical box layout
        layout: {
            type: 'vbox',
            align: 'stretch',
        },
       /* */
        items: [{
            // set title bar at top of view
            xtype: 'titlebar',
            docked: 'top',
            // css class resouces/css/app.css
            cls: 'zermelo-toolbar-main',
            height: '47px',
            //multiple language
            locales: {
                title: 'appointment.title',
            },
            // add back button in title bar left side
            items: [{
                    xtype: 'button',
                    id: 'appointmentDetails_back',
                    // css class resouces/css/app.css
                    iconCls: 'zermelo-back-button-' + imageType,
                    align: 'left',
                    ui: 'plain',
                    style: {
                        'padding-left': '0px'
                    },
                    //multiple language
                    locales: {
                        text: 'back.back',
                    },
                }]
                //end titelbar
        }, {
            xtype: 'container',
            id: 'details',
            scrollable: true,
            height: '100%',
            scrollable: {
            direction: 'vertical',
            directionLock: false
        },
        }],
        //main container
        //end main container
    } //end config
});

function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (String(myArray[i].id) === nameKey) {
            return myArray[i];
        }
    }
}
