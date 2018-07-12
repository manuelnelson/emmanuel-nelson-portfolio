<template>
  <div class="work-tile">
    <div class="tile-wrapper" :class="{'show-more': showMore}">
      <img :src="work.image.url" :alt="work.name"/>
      <div class="view">
        <a :href="work.link" target="_blank"><i class="fa fa-eye"></i> View Site</a>
      </div>
      <div class="lead-content">
        <div class="container">
          <span class="read-more" @click="readMore()">Read More<i class="icon-enlarge2"></i></span>
          <span class="close" @click="close()">Close<i class="icon-cross"></i></span>
          <h4 class="name">{{work.name}}</h4>
          <div class="roles">
            <span v-for="role in work.roles" :key="role._id" class="role">{{role.name}}</span>
          </div>
          <div class="description">
            <h4>Features &amp; Technologies</h4>
            <div v-html="work.content.extended"></div>
          </div>
          <div class="company">
            <p>Made with company: <span>{{work.company}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      showMore: false
    }
  },
  props:['work'],
  methods: {
    readMore(work){
      this.showMore = true;
    },
    close(work){
      this.showMore = false;
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/variables'
  .work-tile{
      width:33.333%;
      display:inline-block;
      transition:all 0.3s ease-in-out;
      position:relative;
      z-index:2;
      overflow: hidden;
      img{
          float:left;
          width:100%;
          height:100%;
      }
      .tile-wrapper{
          overflow:hidden;
          &:before{
              content: " ";
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,0.5);
              position: absolute;
              transition: background-color 0.3s ease-in-out;
          }
          &:hover{
              &:before{
                  background-color: transparent;
              }
              .lead-content{
                  z-index: 100;
                  bottom:0;
              }
              .view{
                  a{
                      visibility: visible;
                      opacity:1;
                  }
              }
          }
          &.show-more{
              opacity: 1;
              overflow:visible;
              .lead-content{
                  background-color:black;
                  opacity:1;
                  bottom:0;
                  height:100%;
                  padding:0;
                  z-index:10;
                  .close{
                      display:inline-block;
                  }
                  .read-more{
                      display:none;
                  }
                  .description,.company{
                      visibility: visible;
                      opacity: 1;
                  }
              }
          }
      }
  }
  .view{
      width:100%;
      height:20px;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      text-align:center;
      a{
          font-size:1.5rem;
          background:rgba(0,0, 0, 0.94);
          padding:5px 15px;
          border-radius:1rem;
          visibility: hidden;
          opacity:0;
          transition: all 0.3s ease-in-out;
          display:inline-block;
          color:$color-secondary;
          //i{
          //font-size:2rem;
          //}
          &:hover{
              color:$color-white;
              cursor: pointer;
          }
      }
  }
  .lead-content{
      background-color: rgba(0,0, 0, 0.85);
      display: block;
      height:100px;
      position:absolute;
      bottom:-120px; 
      width:100%;
      z-index: -10;
      transition: bottom 0.3s ease-in-out, height 0.3s ease-in-out;
      .read-more, .close{
          position:absolute;
          right:20px;
          color:$color-white;
          &:hover{
              cursor:pointer;
          }
          i{
              margin-left:4px;
          }
      }
      .close{
          display:none;
      }
      .container{
          padding:20px 20px 0;
      }
      .name{
          font-weight: bold;
          line-height:1.5;
          margin-bottom:5px;
          text-transform:uppercase;
          display: inline-block;
          border-bottom:solid 4px $color-primary-inverse;
      }
      .roles{
          .role{
              margin-right:5px;
              &:after{
                  content: '+';
                  margin-left:5px;
                  color:$color-white;
              }
              &:last-child{
                  &:after{
                      content:'';
                  }
              }
          }
      }
      .description{
          visibility: hidden;
          opacity: 0;
          transition: all 0.3s ease-in-out;
          h4{
              color:$color-white;
              margin-top:30px;
          }
          a{
              color:$color-primary-inverse;
          }
          ul{
              padding-left: 30px;
              li{
                  list-style-type: disc;
              }
          }
      }
      .company{
          transition: all 0.6s ease-in-out;
          position:absolute;
          bottom:15px;
          visibility: hidden;
          opacity: 0;
          span{
              color:$color-white;
              font-weight: bold;
          }
      }
  }
</style>
