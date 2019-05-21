




function select(obj) {
    var cnt_selected = 0;
    var cnt_sel_b = 0;
    $.each($(obj).parent().parent().find('.header_resort'), function(a,b){
        if($(b).attr("status") == 1)
            cnt_selected++;
    });
    if ($(obj).attr("status") == 0) {
        $(obj).find("span:eq(0)").attr("class", "boxcheck-on");
        $(obj).attr("status", 1);
        if ($("#div_for_" + $(obj).attr("value")).length) {
            $.each($("#div_for_" + $(obj).attr("value") + " ul li a"), function (a, b) {
                $(b).find("span:eq(0)").attr("class", "boxcheck-on");
                $(b).attr("status", 1);
            });
        }
    } else {
        var all = 0;
        $.each($('.main_resort'), function (a,b){
            if($(b).attr("status") != 1)
                all = 1;
        });
        if(all == 0){
            $.each($('.main_resort'), function(a,b){
                $(b).find("span:eq(0)").attr("class", "boxcheck-off");
                $(b).attr("status", 0);
                if ($("#div_for_" + $(b).attr("value")).length) {
                    $.each($("#div_for_" + $(b).attr("value") + " ul li a"), function (c, d) {
                        $(d).find("span:eq(0)").attr("class", "boxcheck-off");
                        $(d).attr("status", 0);
                    });
                }
            });
            $(obj).find("span:eq(0)").attr("class", "boxcheck-on");
            $(obj).attr("status", 1);
            if ($("#div_for_" + $(obj).attr("value")).length) {
                $.each($("#div_for_" + $(obj).attr("value") + " ul li a"), function (a, b) {
                    $(b).find("span:eq(0)").attr("class", "boxcheck-on");
                    $(b).attr("status", 1);
                });
            }
        }
        else {
            $(obj).find("span:eq(0)").attr("class", "boxcheck-off");
            $(obj).attr("status", 0);

            if ($("#div_for_" + $(obj).attr("value")).length) {
                $.each($("#div_for_" + $(obj).attr("value") + " ul li a"), function (a, b) {
                    $(b).find("span:eq(0)").attr("class", "boxcheck-off");
                    $(b).attr("status", 0);
                });
            }
            if (cnt_selected == 1) {
                $.each($(obj).parent().parent().find('a'), function (a, b) {
                    if ($(b).attr("status") == 0) {
                        $(b).find("span:eq(0)").attr("class", "boxcheck-on");
                        $(b).attr("status", 1);

                        if ($("#div_for_" + $(b).attr("value")).length) {
                            $.each($("#div_for_" + $(b).attr("value") + " ul li a"), function (c, d) {
                                $(d).find("span:eq(0)").attr("class", "boxcheck-on");
                                $(d).attr("status", 1);
                            });
                        }
                    }
                });
            }
        }
    }
}
function selectDef(obj) {
    var cnt_selected = 0;
    var cnt_all = $(obj).parent().parent().find('li').length;
    $.each($(obj).parent().parent().find('li'), function (a, b) {
        var j = $(b).find('a');
        if ($(j).attr("status") == 1)
            cnt_selected++;
    });
    if (cnt_all == cnt_selected) {
        $.each($(obj).parent().parent().find('li'), function (a, b) {
            var j = $(b).find('a');
            if ($(j).attr("status") == 1) {
                $(j).find("span:eq(0)").attr("class", "boxcheck-off");
                $(j).attr("status", 0);
                $.each($('.main_resort'), function (c, d) {
                    if("div_for_"+$(d).attr("value")!= $(obj).parent().parent().parent().attr('id')) {
                        $(d).find("span:eq(0)").attr("class", "boxcheck-off");
                        $(d).attr("status", 0);
                        if ($("#div_for_" + $(d).attr("value")).length) {
                            $.each($("#div_for_" + $(d).attr("value") + " ul li a"), function (k, l) {
                                $(l).find("span:eq(0)").attr("class", "boxcheck-off");
                                $(l).attr("status", 0);
                            });
                        }
                    }
                });
            }
        });
        $(obj).find("span:eq(0)").attr("class", "boxcheck-on");
        $(obj).attr("status", 1);
    } else {
        if ($(obj).attr("status") == 0) {
            $(obj).find("span:eq(0)").attr("class", "boxcheck-on");
            $(obj).attr("status", 1);
            var id = $(obj).parent().parent().parent().attr('id').slice(8);
            $.each($('.main_resort'), function (a, b) {
                if($(b).attr("value") == id){
                    $(b).find("span:eq(0)").attr("class", "boxcheck-on");
                    $(b).attr("status", 1);
                }
            });

        } else {
            $(obj).find("span:eq(0)").attr("class", "boxcheck-off");
            $(obj).attr("status", 0);
        }
        cnt_selected = 0;
        $.each($(obj).parent().parent().find('li'), function (a, b) {
            var j = $(b).find('a');
            if ($(j).attr("status") == 1) {
                cnt_selected++;
            }
        });
        if (cnt_selected == 0) {
            var fath = $(obj).parent().parent().parent().parent().find('a:eq(0)');
            if($(fath).attr("status")==0){
                $(fath).find("span:eq(0)").attr("class","boxcheck-on");
                $(fath).attr("status",1);
            }
            $.each($(obj).parent().parent().find('li'), function (a, b) {
                var j = $(b).find('a');
                $(j).find("span:eq(0)").attr("class", "boxcheck-on");
                $(j).attr("status", 1);
            });
        }
    }
}

        $('.js-arrow-down').on('click',function() {
            if ($(this).closest('.js-link-filter').is('.open-filters')) {
                $(this).closest('.js-link-filter').removeClass('open-filters').find('.js-list-filter').find('ul').slideUp(300,function(){
                    if($('.js-stickyfloat').length){
                        $('.js-stickyfloat').trigger("sticky_kit:recalc");
                    }
                });

            } else {
                $(this).closest('.js-link-filter').addClass('open-filters').find('.js-list-filter').find('ul').slideDown(300,function(){
                    if($('.js-stickyfloat').length){
                        $('.js-stickyfloat').trigger("sticky_kit:recalc");
                    }
                });
            }
        });
function selectDef(obj) {
    var cnt_selected = 0;
    var cnt_all = $(obj).parent().parent().find('li').length;
    $.each($(obj).parent().parent().find('li'), function (a, b) {
        var j = $(b).find('a');
        if ($(j).attr("status") == 1)
            cnt_selected++;
    });
    if (cnt_all == cnt_selected) {
        $.each($(obj).parent().parent().find('li'), function (a, b) {
            var j = $(b).find('a');
            if ($(j).attr("status") == 1) {
                $(j).find("span:eq(0)").attr("class", "boxcheck-off");
                $(j).attr("status", 0);
                $.each($('.main_resort'), function (c, d) {
                    if("div_for_"+$(d).attr("value")!= $(obj).parent().parent().parent().attr('id')) {
                        $(d).find("span:eq(0)").attr("class", "boxcheck-off");
                        $(d).attr("status", 0);
                        if ($("#div_for_" + $(d).attr("value")).length) {
                            $.each($("#div_for_" + $(d).attr("value") + " ul li a"), function (k, l) {
                                $(l).find("span:eq(0)").attr("class", "boxcheck-off");
                                $(l).attr("status", 0);
                            });
                        }
                    }
                });
            }
        });
        $(obj).find("span:eq(0)").attr("class", "boxcheck-on");
        $(obj).attr("status", 1);
    } else {
        if ($(obj).attr("status") == 0) {
            $(obj).find("span:eq(0)").attr("class", "boxcheck-on");
            $(obj).attr("status", 1);
            var id = $(obj).parent().parent().parent().attr('id').slice(8);
            $.each($('.main_resort'), function (a, b) {
                if($(b).attr("value") == id){
                    $(b).find("span:eq(0)").attr("class", "boxcheck-on");
                    $(b).attr("status", 1);
                }
            });

        } else {
            $(obj).find("span:eq(0)").attr("class", "boxcheck-off");
            $(obj).attr("status", 0);
        }
        cnt_selected = 0;
        $.each($(obj).parent().parent().find('li'), function (a, b) {
            var j = $(b).find('a');
            if ($(j).attr("status") == 1) {
                cnt_selected++;
            }
        });
        if (cnt_selected == 0) {
            var fath = $(obj).parent().parent().parent().parent().find('a:eq(0)');
            if($(fath).attr("status")==0){
                $(fath).find("span:eq(0)").attr("class","boxcheck-on");
                $(fath).attr("status",1);
            }
            $.each($(obj).parent().parent().find('li'), function (a, b) {
                var j = $(b).find('a');
                $(j).find("span:eq(0)").attr("class", "boxcheck-on");
                $(j).attr("status", 1);
            });
        }
    }
}

function selectClass(obj) {
    var cnt_selected = 0;
    $.each($(obj).parent().parent().find('.search_class'), function(a,b){
        if($(b).attr("status") == 1)
            cnt_selected++;
    });
    if ($(obj).attr("status") == 0) {
        $(obj).find("span:eq(0)").attr("class", "boxcheck-on");
        $(obj).attr("status", 1);
    } else {
        var all = 0;
        $.each($('.search_class'), function (a,b){
            if($(b).attr("status") != 1)
                all = 1;
        });
        if(all == 0){
            $.each($('.search_class'), function(a,b){
                $(b).find("span:eq(0)").attr("class", "boxcheck-off");
                $(b).attr("status", 0);
            });
            $(obj).find("span:eq(0)").attr("class", "boxcheck-on");
            $(obj).attr("status", 1);
        }
        else {
            $(obj).find("span:eq(0)").attr("class", "boxcheck-off");
            $(obj).attr("status", 0);
            if (cnt_selected == 1) {
                $.each($(obj).parent().parent().find('a'), function (a, b) {
                    if ($(b).attr("status") == 0) {
                        $(b).find("span:eq(0)").attr("class", "boxcheck-on");
                        $(b).attr("status", 1);
                    }
                });
            }
        }
    }
}

function selectService(obj) {
    if ($(obj).attr("status") == 0) {
        $(obj).find("span:eq(0)").attr("class", "boxcheck-on");
        $(obj).attr("status", 1);
    }
    else{
        $(obj).find("span:eq(0)").attr("class", "boxcheck-off");
        $(obj).attr("status", 0);
    }
}
// End selectors

/*=======================================*/

/*=======================================*/
function get_val_checkbox(obj){
    var i = 0, result = [];
    $.each($(obj), function(a,b){
        if($(b).attr("status") == 1){
            result[i++] = $(b).attr("value");
        }
    });
    return result;
}