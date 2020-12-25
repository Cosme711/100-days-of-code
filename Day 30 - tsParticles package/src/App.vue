<template>
  <div>
    <Particles
          id="tsparticles"
          :options="{
                background: {
                    color: {
                        value: '#000000'
                    }
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: 'canvas',
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push'
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40
                        },
                        push: {
                            quantity: 6
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#ffffff'
                    },
                    links: {
                        color: '#ffffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 6,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 1200
                        },
                        value: 250
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        random: true,
                        value: 5
                    }
                },
                detectRetina: true
            }"
      />
      <h1>@GressierCosme1</h1>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#tsparticles {
  height: 100vh;
}

h1 {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>