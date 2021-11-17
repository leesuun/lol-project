[33mcommit 09fd5c94d27360acc8c6c2f113085099c188913e[m[33m ([m[1;36mHEAD -> [m[1;32mHTML/CSS[m[33m)[m
Author: leesuun <77526673+leesuun@users.noreply.github.com>
Date:   Tue Nov 16 23:32:02 2021 +0900

    edit header html/css.2

[1mdiff --git a/ad b/ad[m
[1mnew file mode 100644[m
[1mindex 0000000..6a59af7[m
[1m--- /dev/null[m
[1m+++ b/ad[m
[36m@@ -0,0 +1,203 @@[m
[32m+[m[32m[33mcommit 06b276a349e804189ecfdefaac83e1e2805f4b79[m[33m ([m[1;36mHEAD -> [m[1;32mHTML/CSS[m[33m)[m[m
[32m+[m[32mAuthor: leesuun <77526673+leesuun@users.noreply.github.com>[m
[32m+[m[32mDate:   Tue Nov 16 19:52:40 2021 +0900[m
[32m+[m
[32m+[m[32m    edit header html/css[m
[32m+[m
[32m+[m[32m[1mdiff --git a/img/ashe.png b/img/ashe.png[m[m
[32m+[m[32m[1mnew file mode 100644[m[m
[32m+[m[32m[1mindex 0000000..84f2fbb[m[m
[32m+[m[32mBinary files /dev/null and b/img/ashe.png differ[m
[32m+[m[32m[1mdiff --git a/img/back.png b/img/back.png[m[m
[32m+[m[32m[1mnew file mode 100644[m[m
[32m+[m[32m[1mindex 0000000..390ee54[m[m
[32m+[m[32mBinary files /dev/null and b/img/back.png differ[m
[32m+[m[32m[1mdiff --git a/img/pngwing.com.png b/img/pngwing.com.png[m[m
[32m+[m[32m[1mnew file mode 100644[m[m
[32m+[m[32m[1mindex 0000000..5a6d09d[m[m
[32m+[m[32mBinary files /dev/null and b/img/pngwing.com.png differ[m
[32m+[m[32m[1mdiff --git a/src/app.js b/src/app.js[m[m
[32m+[m[32m[1mindex 3b933c5..f163cda 100644[m[m
[32m+[m[32m[1m--- a/src/app.js[m[m
[32m+[m[32m[1m+++ b/src/app.js[m[m
[32m+[m[32m[36m@@ -35,6 +35,7 @@[m [mapp.use([m[m
[32m+[m[32m [m[m[41m[m
[32m+[m[32m app.use(localMiddleware);[m[m[41m[m
[32m+[m[32m app.use("/assets", express.static("assets"));[m[m[41m[m
[32m+[m[32m[32m+[m[32mapp.use("/img", express.static("img"));[m[41m[m[m
[32m+[m[32m app.use("/src/resource/webapp/ckeditor", express.static("ckeditor"));[m[m[41m[m
[32m+[m[32m app.use("/", globalRouter);[m[m[41m[m
[32m+[m[32m app.use("/user", userRouter);[m[m[41m[m
[32m+[m[32m[1mdiff --git a/src/client/scss/components/header.scss b/src/client/scss/components/header.scss[m[m
[32m+[m[32m[1mindex f95481a..bbc9eee 100644[m[m
[32m+[m[32m[1m--- a/src/client/scss/components/header.scss[m[m
[32m+[m[32m[1m+++ b/src/client/scss/components/header.scss[m[m
[32m+[m[32m[36m@@ -6,35 +6,45 @@[m[m
[32m+[m[32m     justify-content: center;[m[m
[32m+[m[32m     align-items: center;[m[m
[32m+[m[32m     padding: 10px 20px;[m[m
[32m+[m[32m[32m+[m[32m    padding: 1.5rem;[m[m
[32m+[m[32m     background-color: #cad0d7;[m[m
[32m+[m[32m[31m-    box-shadow: 0px 0px 3px black;[m[m
[32m+[m[32m[32m+[m[32m    background-color: #838b94;[m[m
[32m+[m[32m[32m+[m[32m    background-image: url(/img/back.png);[m[m
[32m+[m[32m[32m+[m[32m    background-repeat: no-repeat;[m[m
[32m+[m[32m[32m+[m[32m    background-size: contain;[m[m
[32m+[m[32m[32m+[m[32m    background-position: 10rem 0rem;[m[m
[32m+[m[32m[32m+[m[m
[32m+[m[32m     z-index: 1;[m[m
[32m+[m[32m[31m-    // background: linear-gradient(0.25turn, #cad0d7, #333e51);[m[m
[32m+[m[32m[32m+[m[m
[32m+[m[32m[32m+[m[32m    .test {[m[m
[32m+[m[32m[32m+[m[32m        display: flex;[m[m
[32m+[m[32m[32m+[m[32m        gap: 2rem;[m[m
[32m+[m[32m[32m+[m[32m        position: relative;[m[m
[32m+[m[32m[32m+[m[32m    }[m[m
[32m+[m[32m [m[m
[32m+[m[32m     nav {[m[m
[32m+[m[32m         display: flex;[m[m
[32m+[m[32m         justify-content: center;[m[m
[32m+[m[32m[31m-        gap: 0px 1rem;[m[m
[32m+[m[32m[31m-        width: 25%;[m[m
[32m+[m[32m[32m+[m[32m        position: absolute;[m[m
[32m+[m[32m[32m+[m[32m        background-color: #333e51;[m[m
[32m+[m[32m[32m+[m[32m        width: 100%;[m[m
[32m+[m[32m[32m+[m[32m        gap: 0.5rem;[m[m
[32m+[m[32m[32m+[m[32m        bottom: -1rem;[m[m
[32m+[m[32m         a {[m[m
[32m+[m[32m             display: flex;[m[m
[32m+[m[32m             justify-content: center;[m[m
[32m+[m[32m             align-items: center;[m[m
[32m+[m[32m             width: 70px;[m[m
[32m+[m[32m[31m-            height: 70px;[m[m
[32m+[m[32m[31m-            border-radius: 50%;[m[m
[32m+[m[32m[31m-            background-color: #333e51;[m[m
[32m+[m[32m[32m+[m[32m            height: 30px;[m[m
[32m+[m[32m[32m+[m[m
[32m+[m[32m             color: white;[m[m
[32m+[m[32m[31m-            box-shadow: 3px 3px 3px #333e51;[m[m
[32m+[m[32m         }[m[m
[32m+[m[32m     }[m[m
[32m+[m[32m     .contents {[m[m
[32m+[m[32m         display: flex;[m[m
[32m+[m[32m         padding: 10px 5px;[m[m
[32m+[m[32m         margin: 0px 5px;[m[m
[32m+[m[32m[31m-        flex-direction: column;[m[m
[32m+[m[32m         align-items: center;[m[m
[32m+[m[32m[31m-        width: 50%;[m[m
[32m+[m[32m         justify-content: center;[m[m
[32m+[m[32m [m[m
[32m+[m[32m         .main-logo {[m[m
[32m+[m[32m[36m@@ -42,6 +52,7 @@[m[m
[32m+[m[32m             font-size: 2rem;[m[m
[32m+[m[32m             color: #cfb26a;[m[m
[32m+[m[32m             text-shadow: -1px 0 black, 0 1px black, 2px 0 black, 0 -2px black;[m[m
[32m+[m[32m[32m+[m[32m            margin-right: 1.5rem;[m[m
[32m+[m[32m         }[m[m
[32m+[m[32m [m[m
[32m+[m[32m         form {[m[m
[32m+[m[32m[36m@@ -49,10 +60,9 @@[m[m
[32m+[m[32m             gap: 0px 10px;[m[m
[32m+[m[32m             justify-content: center;[m[m
[32m+[m[32m             align-items: center;[m[m
[32m+[m[32m[31m-            width: 100%;[m[m
[32m+[m[32m [m[m
[32m+[m[32m             input {[m[m
[32m+[m[32m[31m-                width: 50%;[m[m
[32m+[m[32m[32m+[m[32m                width: 250px;[m[m
[32m+[m[32m                 height: 35px;[m[m
[32m+[m[32m                 border: none;[m[m
[32m+[m[32m                 border-radius: 5px;[m[m
[32m+[m[32m[36m@@ -62,8 +72,12 @@[m[m
[32m+[m[32m     .side__menu {[m[m
[32m+[m[32m         display: flex;[m[m
[32m+[m[32m         justify-content: flex-end;[m[m
[32m+[m[32m[32m+[m[32m        align-items: center;[m[m
[32m+[m[32m         gap: 0px 10px;[m[m
[32m+[m[32m[31m-        width: 20%;[m[m
[32m+[m[32m[32m+[m[32m        width: 240px;[m[m
[32m+[m[32m[32m+[m[32m        // border: 1px solid black;[m[m
[32m+[m[32m[32m+[m[32m        // margin-left: 1rem;[m[m
[32m+[m[32m[32m+[m[32m        // width: 20%;[m[m
[32m+[m[32m [m[m
[32m+[m[32m         .user__profile {[m[m
[32m+[m[32m             display: flex;[m[m
[32m+[m[32m[1mdiff --git a/src/client/scss/configs/reset.scss b/src/client/scss/configs/reset.scss[m[m
[32m+[m[32m[1mindex 0f535d0..1c518bf 100644[m[m
[32m+[m[32m[1m--- a/src/client/scss/configs/reset.scss[m[m
[32m+[m[32m[1m+++ b/src/client/scss/configs/reset.scss[m[m
[32m+[m[32m[36m@@ -24,9 +24,7 @@[m [mkbd,[m[m
[32m+[m[32m q,[m[m
[32m+[m[32m s,[m[m
[32m+[m[32m samp,[m[m
[32m+[m[32m[31m-small,[m[m
[32m+[m[32m strike,[m[m
[32m+[m[32m[31m-strong,[m[m
[32m+[m[32m sub,[m[m
[32m+[m[32m sup,[m[m
[32m+[m[32m tt,[m[m
[32m+[m[32m[1mdiff --git a/src/views/partials/header.pug b/src/views/partials/header.pug[m[m
[32m+[m[32m[1mindex 508451d..96d43a1 100644[m[m
[32m+[m[32m[1m--- a/src/views/partials/header.pug[m[m
[32m+[m[32m[1m+++ b/src/views/partials/header.pug[m[m
[32m+[m[32m[36m@@ -1,33 +1,33 @@[m[m
[32m+[m[32m header.screen__header[m[m[41m[m
[32m+[m[32m[31m-    nav.nav    [m[m[41m[m
[32m+[m[32m[31m-        a(href="/") [m[m[41m[m
[32m+[m[32m[31m-            span Home[m[m[41m[m
[32m+[m[32m[31m-        a(href="/ranking/page=1") [m[m[41m[m
[32m+[m[32m[31m-            span Ranking[m[m[41m[m
[32m+[m[32m[31m-        a(href="#") [m[m[41m[m
[32m+[m[32m[31m-            span Game[m[m[41m[m
[32m+[m[32m[31m-        a(href="/board/page=1") [m[m[41m[m
[32m+[m[32m[31m-            span Board[m[m[41m[m
[32m+[m[32m[31m-    div.contents[m[m[41m[m
[32m+[m[32m[31m-        form(action="/summoner/")[m[m[41m[m
[32m+[m[32m[32m+[m[32m    div(style="width:200px;height:50px;")[m[41m[m[m
[32m+[m[32m[32m+[m[32m    nav.nav[m[41m           [m[m
[32m+[m[32m[32m+[m[32m        a(href="/") 홈[m[41m[m[m
[32m+[m[32m[32m+[m[32m        a(href="/ranking/page=1") 랭킹[m[41m[m[m
[32m+[m[32m[32m+[m[32m        a(href="/board/page=1") 게시판[m[41m[m[m
[32m+[m[32m[32m+[m[32m        a(href="#") 예정[m[41m [m[m
[32m+[m[32m[32m+[m[32m        a(href="#") 예정[m[41m[m[m
[32m+[m[32m[32m+[m[32m        a(href="#") 예정[m[41m[m[m
[32m+[m[32m[32m+[m[32m        a(href="#") 예정[m[41m[m[m
[32m+[m[32m[32m+[m[32m    div.test[m[41m[m[m
[32m+[m[32m[32m+[m[32m        div.contents[m[41m[m[m
[32m+[m[32m             a(href="/")[m[m[41m[m
[32m+[m[32m                 span.main-logo CFS.GG[m[m[41m[m
[32m+[m[32m[31m-            input(type="text" name="username").form-control[m[m[41m[m
[32m+[m[32m[31m-            button(type="submit").btn.btn-default[m[m[41m[m
[32m+[m[32m[31m-                i.fas.fa-search.fa-lg[m[m[41m[m
[32m+[m[32m[31m-            button(type="submit").btn.btn-default[m[m[41m[m
[32m+[m[32m[31m-                i.fas.fa-microphone.fa-lg        [m[m[41m[m
[32m+[m[32m[31m-    div.side__menu[m[m[41m[m
[32m+[m[32m[31m-        //- i.fas.fa-cog.fa-lg[m[m[41m[m
[32m+[m[32m[31m-        if loggedIn[m[m[41m[m
[32m+[m[32m[31m-            div.user__profile[m[m[41m[m
[32m+[m[32m[31m-                img(src=`https://ddragon.leagueoflegends.com/cdn/11.19.1/img/profileicon/${loggedInUserInfo.profileIconId}.png`)[m[m[41m[m
[32m+[m[32m[31m-                div.user__info[m[m[41m[m
[32m+[m[32m[31m-                    span=loggedInUserInfo.name[m[m[41m[m
[32m+[m[32m[31m-                    span="Level: "+loggedInUserInfo.summonerLevel[m[m[41m[m
[32m+[m[32m[31m-                a(href="/user/logout")  로그아웃[m[m[41m[m
[32m+[m[32m[31m-        else[m[m[41m[m
[32m+[m[32m[31m-            a(href="/login")    [m[m[41m[m
[32m+[m[32m[31m-                span 로그인[m[m[41m[m
[32m+[m[32m[31m-            a(href="/join") [m[m[41m[m
[32m+[m[32m[31m-                span 회원가입[m[m[41m[m
[32m+[m[32m[32m+[m[32m            form(action="/summoner/")[m[41m          [m[m
[32m+[m[32m[32m+[m[32m                input(type="text" name="username").form-control[m[41m[m[m
[32m+[m[32m[32m+[m[32m                button(type="submit").btn.btn-default[m[41m[m[m
[32m+[m[32m[32m+[m[32m                    i.fas.fa-search.fa-lg[m[41m[m[m
[32m+[m[32m[32m+[m[32m                button(type="submit").btn.btn-default[m[41m[m[m
[32m+[m[32m[32m+[m[32m                    i.fas.fa-microphone.fa-lg[m[41m        [m[m
[32m+[m[32m[32m+[m[32m        div.side__menu[m[41m[m[m
[32m+[m[32m[32m+[m[32m            if loggedIn[m[41m[m[m
[32m+[m[32m[32m+[m[32m                div.user__profile[m[41m[m[m
[32m+[m[32m[32m+[m[32m                    img(src=`${process.env.LOL_CDN_URL}img/profileicon/${loggedInUserInfo.profileIconId}.png`)[m[41m[m[m
[32m+[m[32m[32m+[m[32m                    div.user__info[m[41m[m[m
[32m+[m[32m[32m+[m[32m                        span[m[41m[m[m
[32m+[m[32m[32m+[m[32m                            strong=loggedInUserInfo.name[m[41m[m[m
[32m+[m[32m[32m+[m[32m                        span[m[41m[m[m
[32m+[m[32m[32m+[m[32m                            small="Level: "+loggedInUserInfo.summonerLevel[m[41m[m[m
[32m+[m[32m[m
\ No newline at end of file[m
[1mdiff --git a/src/client/scss/components/header.scss b/src/client/scss/components/header.scss[m
[1mindex bbc9eee..9164319 100644[m
[1m--- a/src/client/scss/components/header.scss[m
[1m+++ b/src/client/scss/components/header.scss[m
[36m@@ -1,106 +1,102 @@[m
 .screen__header {[m
     display: flex;[m
[31m-    position: fixed;[m
[31m-    width: 100%;[m
[31m-    top: 0px;[m
     justify-content: center;[m
     align-items: center;[m
[31m-    padding: 10px 20px;[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    position: fixed;[m
[32m+[m[32m    top: 0px;[m
     padding: 1.5rem;[m
[31m-    background-color: #cad0d7;[m
[31m-    background-color: #838b94;[m
[32m+[m[32m    background-color: #9da6b1;[m
     background-image: url(/img/back.png);[m
     background-repeat: no-repeat;[m
     background-size: contain;[m
     background-position: 10rem 0rem;[m
[31m-[m
     z-index: 1;[m
 [m
[31m-    .test {[m
[31m-        display: flex;[m
[31m-        gap: 2rem;[m
[31m-        position: relative;[m
[31m-    }[m
[31m-[m
     nav {[m
         display: flex;[m
         justify-content: center;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        width: 100%;[m
         position: absolute;[m
[32m+[m[32m        bottom: -1rem;[m
         background-color: #333e51;[m
[31m-        width: 100%;[m
         gap: 0.5rem;[m
[31m-        bottom: -1rem;[m
         a {[m
             display: flex;[m
             justify-content: center;[m
             align-items: center;[m
             width: 70px;[m
             height: 30px;[m
[31m-[m
             color: white;[m
[32m+[m[32m            &:hover {[m
[32m+[m[32m                color: black;[m
[32m+[m[32m            }[m
         }[m
     }[m
[31m-    .contents {[m
[32m+[m
[32m+[m[32m    .header__contents {[m
         display: flex;[m
[31m-        padding: 10px 5px;[m
[31m-        margin: 0px 5px;[m
[32m+[m[32m        gap: 1.5rem;[m
         align-items: center;[m
[31m-        justify-content: center;[m
[32m+[m[32m        position: relative;[m
 [m
         .main-logo {[m
             font-family: "Lobster", cursive;[m
             font-size: 2rem;[m
             color: #cfb26a;[m
             text-shadow: -1px 0 black, 0 1px black, 2px 0 black, 0 -2px black;[m
[31m-            margin-right: 1.5rem;[m
         }[m
 [m
[31m-        form {[m
[32m+[m[32m        .user-search {[m
             display: flex;[m
[31m-            gap: 0px 10px;[m
[31m-            justify-content: center;[m
[32m+[m[32m            padding: 10px 5px;[m
[32m+[m[32m            margin: 0px 5px;[m
             align-items: center;[m
[32m+[m[32m            justify-content: center;[m
 [m
[31m-            input {[m
[31m-                width: 250px;[m
[31m-                height: 35px;[m
[31m-                border: none;[m
[31m-                border-radius: 5px;[m
[32m+[m[32m            .search__form {[m
[32m+[m[32m                display: flex;[m
[32m+[m[32m                justify-content: center;[m
[32m+[m[32m                align-items: center;[m
[32m+[m[32m                gap: 0px 10px;[m
[32m+[m
[32m+[m[32m                .search__input {[m
[32m+[m[32m                    width: 400px;[m
[32m+[m[32m                    height: 35px;[m
[32m+[m[32m                    border: none;[m
[32m+[m[32m                    border-radius: 5px;[m
[32m+[m[32m                }[m
             }[m
         }[m
     }[m
[31m-    .side__menu {[m
[31m-        display: flex;[m
[31m-        justify-content: flex-end;[m
[31m-        align-items: center;[m
[31m-        gap: 0px 10px;[m
[32m+[m
[32m+[m[32m    .user-login {[m
         width: 240px;[m
[31m-        // border: 1px solid black;[m
[31m-        // margin-left: 1rem;[m
[31m-        // width: 20%;[m
 [m
[31m-        .user__profile {[m
[32m+[m[32m        .user-profile {[m
             display: flex;[m
             justify-content: center;[m
             align-items: center;[m
 [m
[31m-            .user__info {[m
[31m-                display: flex;[m
[31m-                gap: 3px;[m
[31m-                flex-direction: column;[m
[31m-            }[m
[31m-            img {[m
[32m+[m[32m            .user-img {[m
                 width: 35px;[m
                 height: 35px;[m
                 margin-right: 5px;[m
                 border-radius: 50%;[m
             }[m
[32m+[m[32m            .user-info {[m
[32m+[m[32m                display: flex;[m
[32m+[m[32m                flex-direction: column;[m
[32m+[m[32m                align-items: center;[m
[32m+[m[32m                gap: 5px;[m
[32m+[m[32m            }[m
 [m
[31m-            span {[m
[32m+[m[32m            .user-info__span {[m
                 font-size: 0.8rem;[m
             }[m
 [m
[31m-            a {[m
[32m+[m[32m            .logIn-control {[m
                 margin-left: 1rem;[m
             }[m
         }[m
[1mdiff --git a/src/client/scss/components/linkIcons.scss b/src/client/scss/components/linkIcons.scss[m
[1mnew file mode 100644[m
[1mindex 0000000..737aab5[m
[1m--- /dev/null[m
[1m+++ b/src/client/scss/components/linkIcons.scss[m
[36m@@ -0,0 +1,42 @@[m
[32m+[m[32m.icon__list {[m[41m[m
[32m+[m[32m    position: absolute;[m[41m[m
[32m+[m[32m    right: -6rem;[m[41m[m
[32m+[m[32m    top: -0.7rem;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m.list-row {[m[41m[m
[32m+[m[32m    display: flex;[m[41m[m
[32m+[m[32m    gap: 0.3rem;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m.icon__list li {[m[41m[m
[32m+[m[32m    display: inline;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m.icon__list i {[m[41m[m
[32m+[m[32m    opacity: 0.8;[m[41m[m
[32m+[m[32m    text-decoration: none;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m.icon__list i:hover {[m[41m[m
[32m+[m[32m    text-decoration: none;[m[41m[m
[32m+[m[32m    opacity: 1;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m.fa-github-square {[m[41m[m
[32m+[m[32m    color: black;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m.fa-app-store-ios {[m[41m[m
[32m+[m[32m    color: tomato;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m.fa-pinterest-square {[m[41m[m
[32m+[m[32m    color: green;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m.fa-instagram-square {[m[41m[m
[32m+[m[32m    background: -webkit-linear-gradient(#fbcd6f, #de026e);[m[41m[m
[32m+[m[32m    -webkit-background-clip: text;[m[41m[m
[32m+[m[32m    -webkit-text-fill-color: transparent;[m[41m[m
[32m+[m[32m}[m[41m[m
[1mdiff --git a/src/client/scss/styles.scss b/src/client/scss/styles.scss[m
[1mindex ad1664b..81c30de 100644[m
[1m--- a/src/client/scss/styles.scss[m
[1m+++ b/src/client/scss/styles.scss[m
[36m@@ -6,6 +6,7 @@[m
 @import "components/header.scss";[m
 @import "components/footer.scss";[m
 @import "components/accountErr.scss";[m
[32m+[m[32m@import "components/linkIcons.scss";[m[41m[m
 [m
 //screens[m
 @import "screens/home.scss";[m
[1mdiff --git a/src/views/partials/header.pug b/src/views/partials/header.pug[m
[1mindex 96d43a1..ff54f31 100644[m
[1m--- a/src/views/partials/header.pug[m
[1m+++ b/src/views/partials/header.pug[m
[36m@@ -8,26 +8,44 @@[m [mheader.screen__header[m
         a(href="#") 예정[m
         a(href="#") 예정[m
         a(href="#") 예정[m
[31m-    div.test[m
[31m-        div.contents[m
[31m-            a(href="/")[m
[31m-                span.main-logo CFS.GG[m
[31m-            form(action="/summoner/")          [m
[31m-                input(type="text" name="username").form-control[m
[31m-                button(type="submit").