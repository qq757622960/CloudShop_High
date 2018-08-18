> 云店后台

* 云店总裁版本

* 页面
1. member_manager.html: 会员管理
2. promotion_manager.html: 推广管理
3. extract_manager.html: 提成统计
4. community_manager.html: 社区管理
   add_community.html: 添加社区
5. application_for_cash.html: 提现申请
6. system_setup.html: 系统设置 
7. change_password.html: 修改密码
8. advertising_manager.html: 广告管理


* 2018.7.28 优化
1. 提取每个文件引入的全局配置文件, 提取成 mobileAdapter.js 方便修改
2. 添加 config.js 配置文件, 增加 GLOBAL 全局对象, 用于配置对象
3. 提取每个文件的内嵌 JS

* .site-mobile: 在 body 上添加样式, 可以切换 手机端样式

* 头部带搜索条 顶栏的布局
```
<div class="layui-tab" lay-filter="TAB_CLASS_F">
    <!-- 头部 S -->
    <div class="layui-fluid">
        <div class="layui-row">
            <div class="layui-col-md4 layui-tab-brief">
                <ul class="layui-tab-title">
                    <li class="layui-this" lay-id="TITLE_LIST">分类列表</li>
                    <li lay-id="TITLE_ADD">添加分类</li>
                </ul>
            </div>
            <div class="layui-col-md-offset5 layui-col-md3">
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <input type="text" name="" placeholder="请输入" class="layui-input">
                    </div>
                    <div class="layui-inline">
                        <button class="layui-btn">
                            <i class="layui-icon layui-icon-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 头部 E -->
    <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">
            
        </div>
        <div class="layui-tab-item">
            
        </div>
    </div>
</div>
```

mac OS 10.13.6 koala 报错问题修复
1. 更新 ruby 到最新版本
2. 更新 xcode(在 appStore) 里面更新
3. 卸载 koala 重新安装
以上是我解决的方式
参照: https://segmentfault.com/q/1010000011948829