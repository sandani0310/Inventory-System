<template>
<div>
  <h4 class="mb-4">Invoice</h4>
  
  <b-form-model ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
    
    <div>
      <b-row>
    <b-col sm="2">
    <label for="example-datepicker">Date:</label></b-col>
    <b-col sm="2">
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
     </b-col>
  </b-row>
  </div>

    <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">Invoice ID:</label>
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
      <label for="input-small">Customer:</label>
    </b-col>
    <b-col sm="2">
      <b-form-input
        id="input-small"
        size="sm"
        placeholder=" "
      ></b-form-input>
    </b-col>
  </b-row>

  <div>
    <b-table striped hover :items="items"></b-table>
  </div>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">Total:</label>
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
        Process
      </b-button>
      <b-button style="margin-left: 10px;" @click="clearForm()">
        Clear
      </b-button>
    </b-form-model-item>
  </b-form-model>
</div>
</template>


<script>
export default {
  data() {
    return {
      items: [
          { Item: '', Description: '', Quantity: '', Amount: '' },
          { Item: '', Description: '', Quantity: '', Amount: '' },
          { Item: '', Description: '', Quantity: '', Amount: '' },
          { Item: '', Description: '', Quantity: '', Amount: '' }
        ]

    };
  },
 };
</script>
