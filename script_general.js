(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"start":"this.init()","data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"pitch":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false},"history":{},"defaultLocale":"en","name":"Player424"},"backgroundColorRatios":[0],"id":"rootPlayer","minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"gap":10,"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"watermark":false,"hash": "f85405ae7d36cd2cc692ce04ac5851d46dbe1f9e8b02374d0349c9b8b55cd434", "definitions": [{"video":"this.videores_FAE08F8A_E918_E6E6_41E6_6F69758D47C9","chromaThreshold":0.05,"label":trans('video_FB0F196E_E9E8_AA3E_41D5_6F15BAAE7D2B.label'),"thumbnailUrl":"media/video_FB0F196E_E9E8_AA3E_41D5_6F15BAAE7D2B_t.jpg","data":{"label":"04 Mejores Tecnicas de Manejo"},"chromaColor":"#009933","width":1920,"height":1080,"id":"video_FB0F196E_E9E8_AA3E_41D5_6F15BAAE7D2B","class":"Video","chromaSmoothing":0.14},{"class":"PlayList","id":"playList_FB0950F5_E927_BA22_41E1_2DC7B7A4B11C","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_FB0950F5_E927_BA22_41E1_2DC7B7A4B11C, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_FB0950F5_E927_BA22_41E1_2DC7B7A4B11C, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FB0950F5_E927_BA22_41E1_2DC7B7A4B11C, 0)","media":"this.video_FB0F196E_E9E8_AA3E_41D5_6F15BAAE7D2B","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}]},{"class":"PlayList","id":"playList_FB0920F5_E927_BA22_41DA_CEFD6636CA2D","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_FB0920F5_E927_BA22_41DA_CEFD6636CA2D, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_FB0920F5_E927_BA22_41DA_CEFD6636CA2D, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FB0920F5_E927_BA22_41DA_CEFD6636CA2D, 0)","media":"this.video_F98DD4F2_E928_7A26_41E5_4968A4454C2A","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}]},{"initialPosition":{"class":"RotationalCameraPosition","yaw":-91.83,"pitch":0.15,"hfov":120},"class":"RotationalCamera","enterPointingToHorizon":true,"id":"media_F802828D_E978_9EE2_41A2_5A6E5125E141_camera"},{"class":"PlayList","id":"playList_FB0930F5_E927_BA22_41C4_F26EE48B07D0","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_FB0930F5_E927_BA22_41C4_F26EE48B07D0, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_FB0930F5_E927_BA22_41C4_F26EE48B07D0, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FB0930F5_E927_BA22_41C4_F26EE48B07D0, 0)","media":"this.video_F9A69AAB_E918_AE26_41E5_72B5FD400C35","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}]},{"video":"this.videores_FA657319_E918_BFE2_41D5_25EA51A90440","chromaThreshold":0.05,"label":trans('video_F9A69AAB_E918_AE26_41E5_72B5FD400C35.label'),"thumbnailUrl":"media/video_F9A69AAB_E918_AE26_41E5_72B5FD400C35_t.jpg","data":{"label":"02 Mayor Control de Malezas"},"chromaColor":"#009933","width":1920,"height":1080,"id":"video_F9A69AAB_E918_AE26_41E5_72B5FD400C35","class":"Video","chromaSmoothing":0.14},{"video":["this.videores_FB34AFBE_E927_A61E_41ED_0147D03E5210","this.videores_FB34BFBE_E927_A61E_41DF_1CA13C36F239"],"hfovMax":120,"label":trans('media_F802828D_E978_9EE2_41A2_5A6E5125E141.label'),"hfovMin":120,"loop":true,"thumbnailUrl":"media/media_F802828D_E978_9EE2_41A2_5A6E5125E141_t.jpg","data":{"label":"videoloop"},"pitch":0,"hfov":360,"class":"Video360","overlays":["this.overlay_F802A28D_E978_9EE2_41C7_878773449CB7","this.overlay_F802928D_E978_9EE2_41AA_971CD583A2D9","this.overlay_F8CE46C3_E967_E666_41DD_8CDC12F18666","this.overlay_FAD085FA_E91B_9A26_41E5_36C08A7F1C02","this.overlay_F9C13DF5_E919_AA22_41E1_481CFC68C156","this.overlay_FA3971DB_E927_9A66_41E2_0C0BCDAEE7F8","this.overlay_FB577D4A_E929_AA66_41DE_2264441F821B","this.overlay_FA5E0A8A_E918_AEE6_41DE_49D76D16E373","this.overlay_FB872A63_E9E8_EE26_41A9_31913A754099","this.overlay_FB226D96_E9E8_6AEE_41B7_A26DF0C08FCF","this.overlay_FA12CA4B_E9E8_AE66_41EA_7EACC1FF0D7A"],"vfov":180,"id":"media_F802828D_E978_9EE2_41A2_5A6E5125E141"},{"class":"VideoPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"displayPlayOverlay":true,"id":"MainViewerVideoPlayer","clickAction":"play_pause"},{"class":"MediaAudio","autoplay":true,"id":"audio_FB1B873F_E918_A61E_41D9_0B7E125690E9","data":{"label":"las mejores t\u00e9cnicas de manejo"},"audio":"this.audiores_FAE7F058_E918_9A62_41E6_60946401CB55"},{"aaEnabled":true,"viewerArea":"this.MainViewer","mode":"quality","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"class":"PlayList","id":"playList_FB08E0F5_E927_BA22_41D9_0ACF5FBDD398","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_FB08E0F5_E927_BA22_41D9_0ACF5FBDD398, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_FB08E0F5_E927_BA22_41D9_0ACF5FBDD398, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FB08E0F5_E927_BA22_41D9_0ACF5FBDD398, 0)","media":"this.video_E9120E94_E4FF_015C_41B4_805C1F296569","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}]},{"class":"PlayList","id":"playList_FB0900F5_E927_BA22_41C6_24FDA33FECF0","items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_FB0900F5_E927_BA22_41C6_24FDA33FECF0, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_FB0900F5_E927_BA22_41C6_24FDA33FECF0, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FB0900F5_E927_BA22_41C6_24FDA33FECF0, 0)","media":"this.video_F8B9EFEA_E967_A626_41D2_DD66149D4581","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}]},{"video":"this.videores_F995C40D_E928_99E2_41DE_75BA4DB32BE5","chromaThreshold":0.05,"label":trans('video_F98DD4F2_E928_7A26_41E5_4968A4454C2A.label'),"thumbnailUrl":"media/video_F98DD4F2_E928_7A26_41E5_4968A4454C2A_t.jpg","data":{"label":"03 Proteccion Mejorada"},"chromaColor":"#009933","width":1920,"height":1080,"id":"video_F98DD4F2_E928_7A26_41E5_4968A4454C2A","class":"Video","chromaSmoothing":0.14},{"video":"this.videores_EB67B48B_E4FB_014B_41C3_3A76759BBCAF","chromaThreshold":0.08,"label":trans('video_E9120E94_E4FF_015C_41B4_805C1F296569.label'),"thumbnailUrl":"media/video_E9120E94_E4FF_015C_41B4_805C1F296569_t.jpg","data":{"label":"01 Video Intro Intacta"},"chromaColor":"#0BAF35","width":1920,"height":1080,"id":"video_E9120E94_E4FF_015C_41B4_805C1F296569","class":"Video","chromaSmoothing":0.12},{"class":"MediaAudio","autoplay":true,"id":"audio_FA7A5677_E968_A62E_41E1_973CB86BF86C","data":{"label":"favor mirar hacia la izquierda"},"audio":"this.audiores_FA234681_E968_A6E2_41D0_15EB71B529D6"},{"progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"subtitlesGap":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"minHeight":50,"minWidth":100,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColor":["#000000"],"subtitlesTextShadowOpacity":1,"playbackBarHeadWidth":6,"subtitlesTextShadowHorizontalLength":1,"subtitlesFontColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","playbackBarHeight":10,"toolTipPaddingRight":6,"toolTipBorderColor":"#767676","playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"playbackBarProgressBorderSize":0,"progressBorderSize":0,"playbackBarHeadBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadow":true,"progressBorderRadius":2,"subtitlesBottom":50,"playbackBarRight":0,"progressBarBorderSize":0,"progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"progressLeft":"33%","playbackBarHeadBorderRadius":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"playbackBarHeadBorderColor":"#000000","height":"100%","propagateClick":false,"progressBackgroundColorRatios":[0],"progressBarBorderRadius":2,"playbackBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"toolTipTextShadowColor":"#000000","progressBottom":10,"toolTipShadowColor":"#333138","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","width":"100%","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","progressRight":"33%","progressOpacity":0.7,"subtitlesFontSize":"3vmin","subtitlesTextShadowVerticalLength":1,"progressHeight":2,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColor":["#3399FF"],"vrPointerSelectionTime":2000,"progressBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadHeight":15,"playbackBarLeft":0,"class":"ViewerArea","toolTipPaddingTop":4,"toolTipFontColor":"#606060","playbackBarBottom":5,"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","id":"MainViewer","playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF"},{"video":"this.videores_F95D4E67_E918_662E_41E4_6A93B8A6B868","chromaThreshold":0.32,"label":trans('video_F8B9EFEA_E967_A626_41D2_DD66149D4581.label'),"thumbnailUrl":"media/video_F8B9EFEA_E967_A626_41D2_DD66149D4581_t.jpg","data":{"label":"Animated Arrow Left"},"chromaColor":"#0200F2","width":1376,"height":1002,"id":"video_F8B9EFEA_E967_A626_41D2_DD66149D4581","class":"Video","chromaSmoothing":0.14},{"class":"PlayList","id":"mainPlayList","items":[{"class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.media_F802828D_E978_9EE2_41A2_5A6E5125E141_camera","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000')","media":"this.media_F802828D_E978_9EE2_41A2_5A6E5125E141","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"}]},{"class":"MediaAudio","autoplay":true,"id":"audio_FA22E14B_E928_9A66_41D0_8EE656713697","data":{"label":"bienvenidos-as"},"audio":"this.audiores_F4122EB0_E511_3010_41D4_42F8BC8450B9"},{"class":"MediaAudio","autoplay":true,"id":"audio_FA50A1BF_E918_9A1E_41CC_F2358D957BDA","data":{"label":"proteccion mejorada contra las orugas"},"audio":"this.audiores_F99B54F6_E928_9A2E_41D0_35F276125DB4"},{"class":"VideoResource","height":1080,"id":"videores_FAE08F8A_E918_E6E6_41E6_6F69758D47C9","width":1920,"levels":["this.videolevel_FB38B077_E927_BA2E_41DC_3C399EC93B87"]},{"class":"VideoResource","height":1080,"id":"videores_FA657319_E918_BFE2_41D5_25EA51A90440","width":1920,"levels":["this.videolevel_FB37503F_E927_BA1E_41EB_6FAB78E27FBF"]},{"class":"Video360Resource","url":trans('videores_FB34AFBE_E927_A61E_41ED_0147D03E5210.url'),"framerate":29.97,"width":3718,"bitrate":8100,"type":"video/mp4","height":1860,"id":"videores_FB34AFBE_E927_A61E_41ED_0147D03E5210","posterURL":trans('videores_FB34AFBE_E927_A61E_41ED_0147D03E5210.posterURL'),"gain":0},{"class":"Video360Resource","url":trans('videores_FB34BFBE_E927_A61E_41DF_1CA13C36F239.url'),"framerate":29.97,"width":3840,"bitrate":8100,"type":"video/mp4","height":2048,"id":"videores_FB34BFBE_E927_A61E_41DF_1CA13C36F239","posterURL":trans('videores_FB34BFBE_E927_A61E_41DF_1CA13C36F239.posterURL'),"gain":0},{"useHandCursor":true,"enabledInCardboard":true,"maps":[],"items":[{"playbackPositions":[{"class":"PanoramaOverlayPlaybackPosition","yaw":-91.83,"opacity":0.01,"vfov":81.96,"timestamp":0,"pitch":3.03,"hfov":77.06}],"distance":100,"pitch":3.03,"hfov":77.06,"class":"HotspotPanoramaOverlayImage","yaw":-91.83,"opacity":0.01,"vfov":81.96,"image":"this.AnimatedImageResource_FB06C0B1_E927_BA22_41B9_321012141DB7","data":{"label":"1MarkerInicio"},"scaleMode":"none"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_EAD67B82_E50D_0735_41EA_258B3C36215A"],"data":{"label":"1MarkerInicio"},"id":"overlay_F802A28D_E978_9EE2_41C7_878773449CB7"},{"start":"this.executeAudioAction([this.audio_FA22E14B_E928_9A66_41D0_8EE656713697],'play',this.media_F802828D_E978_9EE2_41A2_5A6E5125E141,true,false,false); this.setOverlaysVisibility([this.overlay_F802A28D_E978_9EE2_41C7_878773449CB7], false, 0)","cues":[],"distance":50,"chromaThreshold":0.08,"video":"this.videores_EB67B48B_E4FB_014B_41C3_3A76759BBCAF","end":"this.setOverlaysVisibility([this.overlay_F802928D_E978_9EE2_41AA_971CD583A2D9], false, 0); this.setOverlaysVisibility([this.overlay_F8CE46C3_E967_E666_41DD_8CDC12F18666], true, 0)","useHandCursor":true,"data":{"label":"1LogoIntactaInicio"},"enabled":false,"playbackPositions":[{"class":"PanoramaOverlayPlaybackPosition","yaw":-88.98,"vfov":56,"timestamp":0,"pitch":3.65,"hfov":89}],"autoplay":true,"chromaColor":"#0BAF35","chromaSmoothing":0.12,"pitch":3.65,"hfov":89,"class":"VideoPanoramaOverlay","yaw":-88.98,"vfov":56,"image":"this.res_EA6C4D2D_E4FB_034F_41E7_233270341468","id":"overlay_F802928D_E978_9EE2_41AA_971CD583A2D9"},{"start":"this.executeAudioAction([this.audio_FA7A5677_E968_A62E_41E1_973CB86BF86C],'play',this.media_F802828D_E978_9EE2_41A2_5A6E5125E141,true,false,false); this.setOverlaysVisibility([this.overlay_FAD085FA_E91B_9A26_41E5_36C08A7F1C02], true, 0)","cues":[],"distance":50,"chromaThreshold":0.32,"video":"this.videores_F95D4E67_E918_662E_41E4_6A93B8A6B868","loop":true,"useHandCursor":true,"data":{"label":"1ArrowLeft"},"playbackPositions":[{"class":"QuadPanoramaOverlayPlaybackPosition","timestamp":0,"vertices":[{"class":"PanoramaPoint","yaw":-109.62,"pitch":16.81},{"class":"PanoramaPoint","yaw":-72.88,"pitch":16.8},{"class":"PanoramaPoint","yaw":-73.51,"pitch":-8.13},{"class":"PanoramaPoint","yaw":-109,"pitch":-8.12}]}],"vertices":[{"class":"PanoramaPoint","yaw":-109.62,"pitch":16.81},{"class":"PanoramaPoint","yaw":-72.88,"pitch":16.8},{"class":"PanoramaPoint","yaw":-73.51,"pitch":-8.13},{"class":"PanoramaPoint","yaw":-109,"pitch":-8.12}],"enabled":false,"chromaColor":"#0200F2","autoplay":true,"class":"QuadVideoPanoramaOverlay","chromaSmoothing":0.14,"image":"this.res_F8A47BD7_E918_6E6E_41E2_4D58378925FC","id":"overlay_F8CE46C3_E967_E666_41DD_8CDC12F18666"},{"useHandCursor":true,"enabledInCardboard":true,"maps":[],"items":[{"playbackPositions":[{"class":"PanoramaOverlayPlaybackPosition","yaw":162.34,"opacity":0.01,"vfov":69.9,"timestamp":0,"pitch":2.96,"hfov":78.61}],"distance":100,"pitch":2.96,"hfov":78.61,"class":"HotspotPanoramaOverlayImage","yaw":162.34,"opacity":0.01,"vfov":69.9,"image":"this.AnimatedImageResource_FB0740B2_E927_BA26_41E7_61204FA30489","data":{"label":"2Marker"},"scaleMode":"none"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_FAD0C5FB_E91B_9A26_41D5_166FAAD96012"],"data":{"label":"2Marker"},"enabled":false,"id":"overlay_FAD085FA_E91B_9A26_41E5_36C08A7F1C02"},{"cues":[],"distance":50,"chromaThreshold":0.05,"video":"this.videores_FA657319_E918_BFE2_41D5_25EA51A90440","end":"this.setOverlaysVisibility([this.overlay_FA3971DB_E927_9A66_41E2_0C0BCDAEE7F8], true, 0); this.setOverlaysVisibility([this.overlay_FB577D4A_E929_AA66_41DE_2264441F821B], true, 0)","useHandCursor":true,"data":{"label":"2MayorControlDeMalezas"},"enabled":false,"playbackPositions":[{"class":"PanoramaOverlayPlaybackPosition","yaw":162.21,"vfov":56,"timestamp":0,"pitch":1.69,"hfov":89}],"autoplay":true,"chromaColor":"#009933","chromaSmoothing":0.14,"pitch":1.69,"hfov":89,"class":"VideoPanoramaOverlay","yaw":162.21,"vfov":56,"image":"this.res_FA6C2FE1_E918_A625_41D0_5F7793B5A520","id":"overlay_F9C13DF5_E919_AA22_41E1_481CFC68C156"},{"start":"this.executeAudioAction([this.audio_FA7A5677_E968_A62E_41E1_973CB86BF86C],'play',this.media_F802828D_E978_9EE2_41A2_5A6E5125E141,true,false,false); this.setOverlaysVisibility([this.overlay_FB577D4A_E929_AA66_41DE_2264441F821B], true, 0)","cues":[],"distance":50,"chromaThreshold":0.32,"video":"this.videores_F95D4E67_E918_662E_41E4_6A93B8A6B868","loop":true,"useHandCursor":true,"data":{"label":"2ArrowLeft"},"playbackPositions":[{"class":"QuadPanoramaOverlayPlaybackPosition","timestamp":0,"vertices":[{"class":"PanoramaPoint","yaw":142.71,"pitch":13.37},{"class":"PanoramaPoint","yaw":178.83,"pitch":13.23},{"class":"PanoramaPoint","yaw":178.62,"pitch":-11.71},{"class":"PanoramaPoint","yaw":142.73,"pitch":-11.57}]}],"vertices":[{"class":"PanoramaPoint","yaw":142.71,"pitch":13.37},{"class":"PanoramaPoint","yaw":178.83,"pitch":13.23},{"class":"PanoramaPoint","yaw":178.62,"pitch":-11.71},{"class":"PanoramaPoint","yaw":142.73,"pitch":-11.57}],"enabled":false,"chromaColor":"#0200F2","autoplay":true,"class":"QuadVideoPanoramaOverlay","chromaSmoothing":0.14,"image":"this.res_F8A47BD7_E918_6E6E_41E2_4D58378925FC","id":"overlay_FA3971DB_E927_9A66_41E2_0C0BCDAEE7F8"},{"useHandCursor":true,"enabledInCardboard":true,"maps":[],"items":[{"playbackPositions":[{"class":"PanoramaOverlayPlaybackPosition","yaw":57.16,"opacity":0.01,"vfov":69.9,"timestamp":0,"pitch":-0.38,"hfov":78.61}],"distance":100,"pitch":-0.38,"hfov":78.61,"class":"HotspotPanoramaOverlayImage","yaw":57.16,"opacity":0.01,"vfov":69.9,"image":"this.AnimatedImageResource_FB07B0B2_E927_BA26_41EA_48CA1757DC02","data":{"label":"3Marker"},"scaleMode":"none"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_FB576D4A_E929_AA66_41CA_2DA2F9C67013"],"data":{"label":"3Marker"},"enabled":false,"id":"overlay_FB577D4A_E929_AA66_41DE_2264441F821B"},{"start":"this.setOverlaysVisibility([this.overlay_FB577D4A_E929_AA66_41DE_2264441F821B], false, 0); this.executeAudioAction([this.audio_FA50A1BF_E918_9A1E_41CC_F2358D957BDA],'play',this.media_F802828D_E978_9EE2_41A2_5A6E5125E141,true,false,false)","cues":[],"distance":50,"chromaThreshold":0.05,"video":"this.videores_F995C40D_E928_99E2_41DE_75BA4DB32BE5","end":"this.setOverlaysVisibility([this.overlay_FB872A63_E9E8_EE26_41A9_31913A754099], true, 0)","useHandCursor":true,"data":{"label":"3ProteccionMejorada"},"enabled":false,"playbackPositions":[{"class":"PanoramaOverlayPlaybackPosition","yaw":57.28,"vfov":56,"timestamp":0,"pitch":-0.09,"hfov":89}],"autoplay":true,"chromaColor":"#009933","chromaSmoothing":0.14,"pitch":-0.09,"hfov":89,"class":"VideoPanoramaOverlay","yaw":57.28,"vfov":56,"image":"this.res_FAEBDA78_E918_EE22_41E0_5D004A7CB808","id":"overlay_FA5E0A8A_E918_AEE6_41DE_49D76D16E373"},{"start":"this.executeAudioAction([this.audio_FA7A5677_E968_A62E_41E1_973CB86BF86C],'play',this.media_F802828D_E978_9EE2_41A2_5A6E5125E141,true,false,false); this.setOverlaysVisibility([this.overlay_FB226D96_E9E8_6AEE_41B7_A26DF0C08FCF], true, 0)","cues":[],"distance":50,"chromaThreshold":0.32,"video":"this.videores_F95D4E67_E918_662E_41E4_6A93B8A6B868","loop":true,"useHandCursor":true,"data":{"label":"3ArrowLeft"},"playbackPositions":[{"class":"QuadPanoramaOverlayPlaybackPosition","timestamp":0,"vertices":[{"class":"PanoramaPoint","yaw":38.32,"pitch":13.27},{"class":"PanoramaPoint","yaw":74.43,"pitch":13.13},{"class":"PanoramaPoint","yaw":74.23,"pitch":-11.81},{"class":"PanoramaPoint","yaw":38.33,"pitch":-11.67}]}],"vertices":[{"class":"PanoramaPoint","yaw":38.32,"pitch":13.27},{"class":"PanoramaPoint","yaw":74.43,"pitch":13.13},{"class":"PanoramaPoint","yaw":74.23,"pitch":-11.81},{"class":"PanoramaPoint","yaw":38.33,"pitch":-11.67}],"enabled":false,"chromaColor":"#0200F2","autoplay":true,"class":"QuadVideoPanoramaOverlay","chromaSmoothing":0.14,"image":"this.res_F8A47BD7_E918_6E6E_41E2_4D58378925FC","id":"overlay_FB872A63_E9E8_EE26_41A9_31913A754099"},{"useHandCursor":true,"enabledInCardboard":true,"maps":[],"items":[{"playbackPositions":[{"class":"PanoramaOverlayPlaybackPosition","yaw":-26.68,"opacity":0.01,"vfov":69.9,"timestamp":0,"pitch":-0.81,"hfov":78.61}],"distance":100,"pitch":-0.81,"hfov":78.61,"class":"HotspotPanoramaOverlayImage","yaw":-26.68,"opacity":0.01,"vfov":69.9,"image":"this.AnimatedImageResource_FB0810B2_E927_BA26_4193_81D4B61724E7","data":{"label":"4Marker"},"scaleMode":"none"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_FB224D96_E9E8_6AEE_41EB_24801F9C58C5"],"data":{"label":"4Marker"},"enabled":false,"id":"overlay_FB226D96_E9E8_6AEE_41B7_A26DF0C08FCF"},{"start":"this.setOverlaysVisibility([this.overlay_FB226D96_E9E8_6AEE_41B7_A26DF0C08FCF], false, 0); this.executeAudioAction([this.audio_FB1B873F_E918_A61E_41D9_0B7E125690E9],'play',this.media_F802828D_E978_9EE2_41A2_5A6E5125E141,true,false,false)","cues":[],"distance":50,"chromaThreshold":0.05,"video":"this.videores_FAE08F8A_E918_E6E6_41E6_6F69758D47C9","useHandCursor":true,"data":{"label":"4LasMejoresTecnicasDeManejo"},"enabled":false,"playbackPositions":[{"class":"PanoramaOverlayPlaybackPosition","yaw":-26.34,"vfov":56,"timestamp":0,"pitch":0.46,"hfov":89}],"autoplay":true,"chromaColor":"#009933","chromaSmoothing":0.14,"pitch":0.46,"hfov":89,"class":"VideoPanoramaOverlay","yaw":-26.34,"vfov":56,"image":"this.res_FAEB3A79_E918_EE22_41E1_CB36F83DCBD4","id":"overlay_FA12CA4B_E9E8_AE66_41EA_7EACC1FF0D7A"},{"class":"AudioResource","id":"audiores_FAE7F058_E918_9A62_41E6_60946401CB55","mp3Url":trans('audiores_FAE7F058_E918_9A62_41E6_60946401CB55.mp3Url')},{"class":"VideoResource","height":1080,"id":"videores_F995C40D_E928_99E2_41DE_75BA4DB32BE5","width":1920,"levels":["this.videolevel_FB37F054_E927_BA62_41D4_EF9B4E47B772"]},{"class":"VideoResource","gain":0.73,"levels":["this.videolevel_FB35DFF2_E927_A626_41E9_2ADF2C663F6E"],"height":1080,"id":"videores_EB67B48B_E4FB_014B_41C3_3A76759BBCAF","width":1920},{"class":"AudioResource","id":"audiores_FA234681_E968_A6E2_41D0_15EB71B529D6","mp3Url":trans('audiores_FA234681_E968_A6E2_41D0_15EB71B529D6.mp3Url')},{"class":"VideoResource","height":1002,"id":"videores_F95D4E67_E918_662E_41E4_6A93B8A6B868","width":1376,"levels":["this.videolevel_FB371027_E927_BA2E_41E0_3A85D082D675"]},{"class":"AudioResource","id":"audiores_F4122EB0_E511_3010_41D4_42F8BC8450B9","mp3Url":trans('audiores_F4122EB0_E511_3010_41D4_42F8BC8450B9.mp3Url')},{"class":"AudioResource","id":"audiores_F99B54F6_E928_9A2E_41D0_35F276125DB4","mp3Url":trans('audiores_F99B54F6_E928_9A2E_41D0_35F276125DB4.mp3Url')},{"class":"VideoResourceLevel","url":trans('videolevel_FB38B077_E927_BA2E_41DC_3C399EC93B87.url'),"framerate":29.97,"width":1920,"bitrate":4660,"type":"video/mp4","height":1080,"id":"videolevel_FB38B077_E927_BA2E_41DC_3C399EC93B87","posterURL":trans('videolevel_FB38B077_E927_BA2E_41DC_3C399EC93B87.posterURL')},{"class":"VideoResourceLevel","url":trans('videolevel_FB37503F_E927_BA1E_41EB_6FAB78E27FBF.url'),"framerate":29.97,"width":1920,"bitrate":4660,"type":"video/mp4","height":1080,"id":"videolevel_FB37503F_E927_BA1E_41EB_6FAB78E27FBF","posterURL":trans('videolevel_FB37503F_E927_BA1E_41EB_6FAB78E27FBF.posterURL')},{"colCount":4,"rowCount":6,"frameCount":24,"class":"AnimatedImageResource","finalFrame":"first","frameDuration":41,"levels":[{"class":"ImageResourceLevel","height":1020,"width":680,"url":"media/res_F5DB8D43_E50B_0334_41E4_56C6090448CD_0.png"}],"id":"AnimatedImageResource_FB06C0B1_E927_BA22_41B9_321012141DB7"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_EAD67B82_E50D_0735_41EA_258B3C36215A","rollOver":"this.setOverlaysVisibility([this.overlay_F802928D_E978_9EE2_41AA_971CD583A2D9], true, 0)"},{"class":"ImageResource","id":"res_EA6C4D2D_E4FB_034F_41E7_233270341468","levels":[{"class":"ImageResourceLevel","height":1080,"width":1920,"url":"media/res_EA6C4D2D_E4FB_034F_41E7_233270341468_0.jpg"}]},{"class":"ImageResource","id":"res_F8A47BD7_E918_6E6E_41E2_4D58378925FC","levels":[{"class":"ImageResourceLevel","height":1002,"width":1376,"url":"media/res_F8A47BD7_E918_6E6E_41E2_4D58378925FC_0.jpg"}]},{"colCount":4,"rowCount":6,"frameCount":24,"class":"AnimatedImageResource","finalFrame":"first","frameDuration":41,"levels":[{"class":"ImageResourceLevel","height":1020,"width":680,"url":"media/res_F5DB8D43_E50B_0334_41E4_56C6090448CD_0.png"}],"id":"AnimatedImageResource_FB0740B2_E927_BA26_41E7_61204FA30489"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_FAD0C5FB_E91B_9A26_41D5_166FAAD96012","rollOver":"this.setOverlaysVisibility([this.overlay_F9C13DF5_E919_AA22_41E1_481CFC68C156], true, 0); this.setOverlaysVisibility([this.overlay_F8CE46C3_E967_E666_41DD_8CDC12F18666], false, 0)"},{"class":"ImageResource","id":"res_FA6C2FE1_E918_A625_41D0_5F7793B5A520","levels":[{"class":"ImageResourceLevel","height":1080,"width":1920,"url":"media/res_FA6C2FE1_E918_A625_41D0_5F7793B5A520_0.jpg"}]},{"colCount":4,"rowCount":6,"frameCount":24,"class":"AnimatedImageResource","finalFrame":"first","frameDuration":41,"levels":[{"class":"ImageResourceLevel","height":1020,"width":680,"url":"media/res_F5DB8D43_E50B_0334_41E4_56C6090448CD_0.png"}],"id":"AnimatedImageResource_FB07B0B2_E927_BA26_41EA_48CA1757DC02"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_FB576D4A_E929_AA66_41CA_2DA2F9C67013","rollOver":"this.setOverlaysVisibility([this.overlay_FA5E0A8A_E918_AEE6_41DE_49D76D16E373], true, 0); this.setOverlaysVisibility([this.overlay_FA3971DB_E927_9A66_41E2_0C0BCDAEE7F8], false, 0)"},{"class":"ImageResource","id":"res_FAEBDA78_E918_EE22_41E0_5D004A7CB808","levels":[{"class":"ImageResourceLevel","height":1080,"width":1920,"url":"media/res_FAEBDA78_E918_EE22_41E0_5D004A7CB808_0.jpg"}]},{"colCount":4,"rowCount":6,"frameCount":24,"class":"AnimatedImageResource","finalFrame":"first","frameDuration":41,"levels":[{"class":"ImageResourceLevel","height":1020,"width":680,"url":"media/res_F5DB8D43_E50B_0334_41E4_56C6090448CD_0.png"}],"id":"AnimatedImageResource_FB0810B2_E927_BA26_4193_81D4B61724E7"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_FB224D96_E9E8_6AEE_41EB_24801F9C58C5","rollOver":"this.setOverlaysVisibility([this.overlay_FA12CA4B_E9E8_AE66_41EA_7EACC1FF0D7A], true, 0); this.setOverlaysVisibility([this.overlay_FB872A63_E9E8_EE26_41A9_31913A754099], false, 0)"},{"class":"ImageResource","id":"res_FAEB3A79_E918_EE22_41E1_CB36F83DCBD4","levels":[{"class":"ImageResourceLevel","height":1080,"width":1920,"url":"media/res_FAEB3A79_E918_EE22_41E1_CB36F83DCBD4_0.jpg"}]},{"class":"VideoResourceLevel","url":trans('videolevel_FB37F054_E927_BA62_41D4_EF9B4E47B772.url'),"framerate":29.97,"width":1920,"bitrate":4660,"type":"video/mp4","height":1080,"id":"videolevel_FB37F054_E927_BA62_41D4_EF9B4E47B772","posterURL":trans('videolevel_FB37F054_E927_BA62_41D4_EF9B4E47B772.posterURL')},{"class":"VideoResourceLevel","url":trans('videolevel_FB35DFF2_E927_A626_41E9_2ADF2C663F6E.url'),"framerate":29.97,"width":1920,"bitrate":4660,"type":"video/mp4","height":1080,"id":"videolevel_FB35DFF2_E927_A626_41E9_2ADF2C663F6E","posterURL":trans('videolevel_FB35DFF2_E927_A626_41E9_2ADF2C663F6E.posterURL')},{"class":"VideoResourceLevel","url":trans('videolevel_FB371027_E927_BA2E_41E0_3A85D082D675.url'),"framerate":29.97,"width":1376,"bitrate":3099,"type":"video/mp4","height":1002,"id":"videolevel_FB371027_E927_BA2E_41E0_3A85D082D675","posterURL":trans('videolevel_FB371027_E927_BA2E_41E0_3A85D082D675.posterURL')}],"height":"100%","width":"100%","children":["this.MainViewer"],"class":"Player","propagateClick":false,"scrollBarColor":"#000000","scripts":{"triggerOverlay":TDV.Tour.Script.triggerOverlay,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPixels":TDV.Tour.Script.getPixels,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showWindow":TDV.Tour.Script.showWindow,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMainViewer":TDV.Tour.Script.getMainViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizFinish":TDV.Tour.Script.quizFinish,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlays":TDV.Tour.Script.getOverlays,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneBindings":TDV.Tour.Script.cloneBindings,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"init":TDV.Tour.Script.init,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"mixObject":TDV.Tour.Script.mixObject,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeech":TDV.Tour.Script.textToSpeech,"setLocale":TDV.Tour.Script.setLocale,"setValue":TDV.Tour.Script.setValue,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"downloadFile":TDV.Tour.Script.downloadFile,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"historyGoForward":TDV.Tour.Script.historyGoForward,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"translate":TDV.Tour.Script.translate,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupImage":TDV.Tour.Script.showPopupImage,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"clone":TDV.Tour.Script.clone,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"existsKey":TDV.Tour.Script.existsKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaByName":TDV.Tour.Script.getMediaByName,"getKey":TDV.Tour.Script.getKey,"openLink":TDV.Tour.Script.openLink,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isPanorama":TDV.Tour.Script.isPanorama,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"initQuiz":TDV.Tour.Script.initQuiz,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"createTween":TDV.Tour.Script.createTween},"layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.20.js.map
})();
//Generated with v2022.2.20, Thu Mar 16 2023
//