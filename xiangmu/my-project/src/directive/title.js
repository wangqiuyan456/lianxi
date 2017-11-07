export default {
  update (el, binding) {
    console.log(binding)
    document.title = binding.value
  }
}
9