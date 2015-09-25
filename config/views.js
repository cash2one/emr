var extras = require('swig-extras');
module.exports.views = {
    engine: {
        /* Template File Extension */
        ext: 'swig',

        /* Function to handle render request */
        fn: function (path, data, cb) {
            /* Swig Renderer */
            var swig = require('swig');
            // 保证我们在开发环境下每次更改swig不用重启sails
            if (data.settings.env === 'development') {
                swig.setDefaults({cache: false});
            }
            // 维护一个site变量
            // data.site = sails.config.site;
            // 提供一个变量标示用户是否登录
            if (typeof (data.isLogged) == 'undefined') {
                // 用一个感叹号返回的都是true,用两个感叹号返回的就是false,所以两个感叹号的作用就在于，如果明确设置了变量的值（非null/undifined/0/""等值),结果就会根据变量的实际值来返回，如果没有设置，结果就会返回false。
                data.isLogged = !!data.req.isAuthenticated();
            }
            data.user = data.req.user;
            data.roleName = {0: "管理员",1: "医生",2: "患者"}; 
            data.orderStatusName = {0: "预约成功",1: "诊断完成",2: "已取消"};
            data.sexName = {"m":"男","f":"女"};

            /*
             * 绑定一些常用路径
             * Thanks to: https://github.com/mahdaen/sails-views-swig
             * */
            var paths = {
                script: '/js',
                style: '/styles',
                image: '/images',
                font: '/fonts',
                icon: '/icons',
                bower: '/bower_components'
            };

            if (!data.path) {
                data.path = paths;
            }
            else {
                for (var key in paths) {
                    if (!key in data.path) {
                        data.path[key] = paths[key];
                    }
                }
            }
            // 补充extra
            extras.useFilter(swig, 'split');
            /* Render Templates */
            return swig.renderFile(path, data, cb);
        }
    },

    // 本来就存在的layout配置
    layout: 'layout',
    partials: false

};