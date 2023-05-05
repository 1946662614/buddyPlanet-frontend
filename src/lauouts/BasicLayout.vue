<template>
    <van-nav-bar
        fixed="true"
        title="标题"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
        <template #right>
            <van-icon name="search" size="18"/>
        </template>
    </van-nav-bar>
    <div id="content">
       <router-view/>
    </div>
<!--    <router-link to="/">Go to Home</router-link>-->
<!--    <router-link to="/team">队伍</router-link>-->
    <van-tabbar route >
        <van-tabbar-item icon="home-o" to="/" name="index">主页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/team" name="team">队伍</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/user" name="user">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang="ts">
import {showToast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter();
const onClickLeft = () => {
    router.push('/');
}
const onClickRight = () => {
    router.push('/search');
}
// 默认主页高亮
// const active = ref("index");
// const onChange = (index) => showToast(`标签 ${index}`);
</script>

<style scoped>

</style>
