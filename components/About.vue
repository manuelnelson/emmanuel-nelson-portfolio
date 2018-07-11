<template>
  <section class="section about" id="about">
    <div class="panel about-panel">
      <h2>About</h2>
      <div class="rich-text dark-background">
        <p>Trying to strike the balance of improving myself daily while never taking myself too seriously.</p>
      </div>
          <h4>Some (Older) Work</h4>
      <div class="rich-text dark-background">
            <ul>
                <li><a href="https://github.com/manuelnelson/BoilerPlateMVC">ASP.NET MVC Boiler Plate Solution</a></li>
                <li><a href="https://github.com/manuelnelson/AudioLibraryJs">Audio Waveforms/Player with WebAPI</a></li>
            </ul>
      </div>
      </div>
    <div class="panel contact-panel" id="contact">
        <h2>Contact</h2>
        <div class="rich-text dark-background">
          <p>Feel free to reach out to me anytime at&nbsp;<a title="My email address" href="mailto:info@emmanuelnelson.com">info@emmanuelnelson.com</a></p>
        </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods: {


  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/variables'
.about{
    &.light-background{
        background-color: $color-off-white;
        p, h2, h4{
            color:$color-primary;
        }
    }
    background-color: darken($color-primary, 10%);
    display: flex;
    padding: px-to-rem(80px) 0;
    $panel-padding:= 3%;
    $panel-width = (50% - 2*$panel-padding);
  	white-space: normal;
    p, h2, h4{
        color:$color-white;
    }
    .panel{
        display: inline-block;
        padding: 0 $panel-padding;
        width: $panel-width;
        min-height: 200px;
    }
    .about-panel{
        h4{
            margin-top: px-to-rem(20px);
        }
        ul{
            padding-left: px-to-rem(30px);
            li{
                list-style-type: disc;
            }
        }
    }
    .contact-panel{
        input,textarea{
            background:white;
            width:100%;
        }
        textarea{
            padding:10px;
            font-family: 'Noto Sans', sans-serif;
            font-size: px-to-rem(16px);
            width:96.5%;
            border-radius:4px;
        }
        .invalid{
            color:#c9302c;
            display: block;
            width:100%;
            margin: 0 0 6px 0 ;
            position: relative;
            top:-4px;
        }
        .submit-button{
            width:100%;
            background-color:$color-primary-inverse;
	      }
  }

  @media (max-width: $breakpoint-tablet-small){
    padding:30px;
    white-space: normal;
    .about-panel{
      width:100%;
      margin:0 0 30px 0; 
      float:none;
      padding:0;
      h4{
        margin-top:30px;
      }
    }
    .contact-panel{
      width:100%;
      margin:0;
      padding:0;
      border-left: none;
      float:none;
      display: block;
      input,textarea{
        width:97%;
      }
      textarea{
        width:92%;
      }
      .submit-button{
        width:97%;
      }
    }
  }
    // @include bp-max($bp-between){
    //     flex-flow: wrap;
    //     .panel{
    //         $padding: 30px;
    //         width: 100%;
    //         padding:0 px-to-rem($padding);
    //         white-space: normal;
    //         margin-bottom: px-to-rem(60px);
    //         &:last-child{
    //             margin-bottom: 0;
    //         }
    //     }

    //     .about-panel{
    //         h4{
    //             margin-top:30px;
    //         }
    //     }
    //     .contact-panel{
    //         border-left: none;
    //         display: block;
    //         input,textarea{
    //             width:97%;
    //         }
    //         textarea{
    //             width:92%;
    //         }
    //         .submit-button{
    //             width:97%;
    //         }
    //     }
    // }
}

</style>
