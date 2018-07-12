<template>
  <header>
    <nav>
      <div class="menu" @click="toggleMenu()">
        <span class="menu-button" :class="{'close':showMenu}"></span>
      </div>
    </nav>
    <div class="mobile-menu" :class="{'show':showMenu}">
      <ul>
        <li><a pageScroll @click="toggleMenu()" href="#work">Work</a></li>
        <li><a pageScroll @click="toggleMenu()" href="#about">About</a></li>
        <li><a pageScroll @click="toggleMenu()" href="#contact">Contact</a></li>
      </ul>
    </div>
  </header>
</template>
<script>

export default {
  data(){
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu(){
      this.showMenu = !this.showMenu;
    }
  }  
}
</script>
<style lang="stylus">
@import '~assets/variables'
@import '~assets/mixins'
header{
    $header-height=80px;
    $menu-button-height=50px;
    $menu-button-width=54px;
    $line-width=40px;
    $line-height=4px;
    $line-gap= 10px;
    $tranistion-duration= 0.5s;
    $menu-shrink-ratio= 1.5;
    position:fixed;
    top:0;
    height:$header-height;
    width:100%;
    z-index: 100;
    background-image:linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.5));
    &.active{
        $icon-color: $color-primary-inverse;
        $background-color: lighten($color-secondary,10%);
        height:$header-height / $menu-shrink-ratio + 6px;
        background-color: rgba(0,0,0,1);
        background-image:linear-gradient(0deg, rgba($color-secondary,0.8), rgba($color-secondary,1));
        .menu{
            height: $menu-button-height / $menu-shrink-ratio;
            width: $menu-button-width / $menu-shrink-ratio;
            top: (($header-height - $menu-button-height)/(2 * $menu-shrink-ratio)); 
            border-color: $icon-color;
        }
        .menu-button{
            height:$line-height / $menu-shrink-ratio;
            width: $line-width / $menu-shrink-ratio;
            background-color: $icon-color;
            bottom: (-($menu-button-height/2) + ($line-height/2) ) / $menu-shrink-ratio;
            &:before, &:after{
                height:$line-height / $menu-shrink-ratio;
                width: $line-width / $menu-shrink-ratio;
                background-color: $icon-color;
            }
            &:before{
                top: -1 * $line-gap / $menu-shrink-ratio
            }
            &:after{
                bottom: -1 * $line-gap / $menu-shrink-ratio
            }
            &.close{
                &:after{
                    bottom: -0.3rem;
                }
            }
        }

    }
    nav{
        position: relative;
        z-index: 100;
        height: 100%;
        .menu{
            height:$menu-button-height;
            position:relative;
            top:(($header-height - $menu-button-height)/(2));
            margin-left:20px;
            width:$menu-button-width;
            border:solid 2px $color-secondary;
            cursor: pointer;
            top: 14px;
            transition: height $tranistion-duration ease-in-out, width $tranistion-duration ease-in-out;

        }
        .menu-button{
            content:'';
            height:$line-height;
            width: $line-width;
            background-color:$color-secondary;
            position:relative;
            display: block;
            margin:0 auto;
            bottom:-($menu-button-height/2) + ($line-height/2);
            transition: all $tranistion-duration ease-in-out;
            cursor:pointer;
            &:before,&:after{
                content:'';
                transition: all $tranistion-duration ease-in-out;
                position:absolute;
                height:$line-height;
                width: $line-width;
                background-color:$color-secondary;
            }
            &:before{
                top:-1 * $line-gap;
            }
            &:after{
                bottom:-1 * $line-gap;
            }
            &.close{
                height:0;
                &:before{
                    transform:rotate(45deg);
                    top:.08rem;
                    background-color:$color-white;

                }
                &:after{
                    transform:rotate(-45deg);
                    bottom:-.4rem;
                    background-color:$color-white;
                }
            }
        }

    }
    .logo{
        font-sans-serif(40px);
        line-height: px-to-rem(64px);
        letter-spacing: -5px;
        white-space: nowrap;
        color:$color-primary-inverse;
        display: inline-block;
        margin-left: px-to-rem(10px);
    }
    bp-max($bp-between){
        .logo{
            line-height: px-to-rem(80px);
        }
    };
}
.mobile-menu{
    $padding-top= 80px;
    background-size:cover;
    width:100vw;
    height:'calc(100vh - %s)' % $padding-top
    position:fixed;
    top:-200vh;
    color:white;
    background-image:linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.99));
    z-index: 90;
    transition:all 0.5s ease-in-out;
    padding-top: $padding-top;
    &.show{
        top:0;
    }
    ul{
        padding-top:100px;
    li{
        width:100%;
        border-bottom:3px solid $color-secondary;
        margin-bottom:20px;
        transition:all 0.5s ease-in-out;
        &:hover{
            border-bottom-color:white;
        }
        a{
            font-size:3em;
            color:$color-secondary;
            transition:all 0.5s ease-in-out;
            padding-left:20px;
            &:hover{
                color:white;
            }
        }
    }
    }
}

</style>
