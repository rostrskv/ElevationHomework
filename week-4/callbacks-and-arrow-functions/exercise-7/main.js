const explode = (lightFunc, soundFunc, sound) => {
  lightFunc()
  soundFunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

const makeSound = sound => alert(sound)

document.getElementById("explode").addEventListener(
  "click",
  () => explode(shineLight, makeSound, "BOOM")
)
