
// fis.match('/page/**/*.html', {
// release: '/dist/$0',
// optimizer: fis.plugin('html-compress', {})
// });

// fis.match('/widget/**/*', {
// isMod: true
// });

// fis.match('/test/**/*', {
// release: '$0'
// });

// fis.match('*.{js,css}', {
// useHash: true
// });

// fis.match('::image', {
// useHash: true
// });

// fis.match('/widget/js/**/*.js', {
// parser: fis.plugin('babel-5.x', {}),
// optimizer: fis.plugin('uglify-js', {})
// });

// fis.match('/widget/js/**/*.less', {
// parser: fis.plugin('less-2.x'),
// rExt: '.css',
// preprocessor: fis.plugin('autoprefixer', {
// 'browsers': [
// 'ie >= 8',
// 'ff >= 10',
// 'chrome >= 20',
// 'safari >= 7',
// 'opera >= 10',
// 'ios >= 7',
// 'android >= 2.3'
// ]
// }),
// isCssLike: true,
// release: '/widget/css/$0'
// });

// fis.match('*.css', {
// optimizer: fis.plugin('clean-css',{})
// });

// fis.match('/widget/img/**/*.png', {
// optimizer: fis.plugin('png-compressor', {})
// });

// fis.match('/static/lib/{*,**/*}.js', {
// isMod: true,
// release: '/static/$0'
// });


fis.media('test')
    .match('*', {
        useHash: false,
        optimizer: null
    });

fis.media('prod')
    .match('page/index.html', {
        release: '/prod/$0'
    })
    .match('widget/less/index.less', {
        parser: fis.plugin('less-2.5.x', {}),
        rExt: '.css',
        // preprocessor: fis.plugin('autoprefixer', {
        //     'browsers': [
        //         'ie >= 8',
        //         'ff >= 10',
        //         'chrome >= 20',
        //         'safari >= 7',
        //         'opera >= 10',
        //         'ios >= 7',
        //         'android >= 2.3'
        //     ]
        // }),
        isCssLike: true,
        release: 'prod/css/',
        // packTo: '/prod/css/all.css',
        useHash: true
        // optimizer: fis.plugin('css-compressor', {
        //     'compatibility': 'ie8',
        //     'noAdvanced': true
        // })
    });



// release            设置文件的产出路径。默认是文件相对项目根目录的路径，以 / 开头。该值可以设置为 false ，表示为不产出（unreleasable）文件
// packTo             分配到这个属性的文件将会合并到这个属性配置的文件中
// packOrder          用来控制合并时的顺序，值越小越在前面。配合 packTo 一起使用
// query              指定文件的资源定位路径之后的query，比如'?t=123124132'
// id                 指定文件的资源id。默认是 namespace + subpath 的值
// moduleId           指定文件资源的模块id。在插件fis3-hook-module里面自动包裹define的时候会用到，默认是 id 的值
// url                指定文件的资源定位路径，以 / 开头。默认是 release 的值，url可以与发布路径 release 不一致
// charset            指定文本文件的输出编码。默认是 utf8，可以制定为 gbk 或 gb2312等
// isHtmlLike         指定对文件进行 html 相关语言能力处理
// isCssLike          指定对文件进行 css 相关的语言能力处理
// isJsLike           指定对文件进行 js 相关的语言能力处理
// useHash            文件是否携带 md5 戳
// domain             给文件 URL 设置 domain 信息
// rExt               设置最终文件产出后的后缀
// useMap             文件信息是否添加到 map.json
// isMod              标示文件是否为组件化文件
// extras             在[静态资源映射表][]中的附加数据，用于扩展[静态资源映射表][]表的功能
// requires           默认依赖的资源id表
// useSameNameRequire 开启同名依赖
// useCache           文件是否使用编译缓存
//
// lint               启用 lint 插件进行代码检查
// parser             启用 parser 插件对文件进行处理
// preprocessor       标准化前处理
// standard           自定义标准化，可以自定义 uri、embed、require 等三种能力，可自定义三种语言能力的语法
// postprocessor      标准化后处理
// optimizer          启用优化处理插件，并配置其属性
//
// prepackager        打包预处理插件
// packager           打包插件
// spriter            打包后处理csssprite的插件
// postpackager       打包后处理插件
// deploy             设置项目发布方式
//
