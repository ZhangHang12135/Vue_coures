<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="sm" v-model="collapsed" class="sider-outer">
        <side-menu :collapsed="collapsed" :list="routers"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses"  type="md-menu" :size="32" @click.native="handleCollapsed" />
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view />
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from '_c/side-menu'
import { mapState } from 'vuex'
export default {
  name: 'layout',
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: false,
    }
  },
  computed:{
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : '/login'
      ]
    },
    ...mapState({
      routers: state => state.router.routers.filter(item => {
        return item.path !== '*' && item.path !== '/login'
      })
    })
  },
  methods:{
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="less">
.layout-wrapper, .layout-outer{
  height: 100%;
  .header-wrapper{
    background: #ffffff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0 , .1);
    padding: 0 20px;
    .trigger-icon{
      cursor: pointer;
      transition: transform .3s ease;
      &.rotate{
        transform: rotateZ(-90deg);
        transition: transform .3s ease;
      }
    }
  }
  .sider-outer{
    height: 100%;
    overflow: hidden;
    .ivu-layout-sider-children{
      margin-right: -20px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  .content-con{
    padding: 10px;
  }
  .page-card{
    min-height: ~"calc(100vh - 84px)"
  }
}
</style>
