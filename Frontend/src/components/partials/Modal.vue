<template>
  <div type="text/x-template" id="modal-template">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal__header">
              <button class="modal-default-button" @click="$emit('close')">X</button>
              <slot name="header" class="modal__title">default header</slot>
            </div>

            <div class="modal__body">
              <slot name="body">default body</slot>
            </div>

            <div class="modal__footer">
              <slot name="footer">default footer</slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 320px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal__header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.modal-default-button {
  display: flex;
  font-weight: bold;
  align-self: flex-end;
  color: $white;
  background-color: $darkGray-secondary;
  padding: 0px 7px;
  border: none;
  margin: 0px 0 20px 0;
  border-radius: 100px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
