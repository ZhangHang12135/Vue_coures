<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="sm" v-model="collapsed">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
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
export default {
  name: 'layout',
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: true,
      menuList: [
        {
          title: '1',
          name: 'menu1',
          icon: 'ios-alarm'
        },
        {
          title: '2',
          name: 'menu2',
          icon: 'ios-alarm'
        },
        {
          title: '3',
          name: 'menu3',
          icon: 'ios-alarm',
          children: [
            {
              title: '3-11',
              name: 'menu31',
              icon: 'ios-alarm'
            }
            ,
            {
              title: '3-22',
              name: 'menu32',
              icon: 'ios-alarm',
              children: [
                {
                  title: '3-22-11',
                  name: 'menu321',
                  icon: 'ios-alarm'
                },
                {
                  title: '3-22-22',
                  name: 'menu322',
                  icon: 'ios-alarm'
                }
              ]
            }
          ]
        },
      ]
    }
  },
  computed:{
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    }
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
  .content-con{
    padding: 10px;
  }
  .page-card{
    min-height: ~"calc(100vh - 84px)"
  }
}
</style>
