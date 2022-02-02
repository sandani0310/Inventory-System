<template>
<div>
  <h4 class="mb-4">Product</h4>
  
  <b-form-model ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
    
    <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">Product ID:</label>
    </b-col>
    <b-col sm="2">
      <b-form-input
        id="input-small"
        size="sm"
        placeholder=" "
      ></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">Product Name:</label>
    </b-col>
    <b-col sm="3">
      <b-form-input
        id="input-small"
        size="sm"
        placeholder=" "
      ></b-form-input>
    </b-col>
  </b-row>

<b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">Price:</label>
    </b-col>
    <b-col sm="2">
      <b-form-input
        id="input-small"
        size="sm"
        placeholder=" "
      ></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">Qty:</label>
    </b-col>
    <b-col sm="2">
      <b-form-input
        id="input-small"
        size="sm"
        placeholder=" "
      ></b-form-input>
    </b-col>
  </b-row>

    <b-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <b-button type="primary" @click="onSubmit()">
        Save
      </b-button>
      <b-button type="primary" @click="onSubmit()">
        Update
      </b-button>
      <b-button style="margin-left: 10px;" @click="clearForm()">
        Clear
      </b-button>
    </b-form-model-item>
  </b-form-model>
</div>
</template>


<script>
</script>
