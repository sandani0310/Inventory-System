<template>
<div>
  <h4 class="mb-4">Report</h4>
  
  <b-form-model ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
    
    <div>
      <b-row>
    <b-col sm="2">
    <label for="example-datepicker">Date from:</label></b-col>
    <b-col sm="2">
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
     </b-col>
  </b-row>

   <b-row>
    <b-col sm="2">
    <label for="example-datepicker">Date to:</label></b-col>
    <b-col sm="2">
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
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
    </div>

     <div>
    <b-table striped hover :items="items"></b-table>
  </div>

  <b-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <b-button type="primary" @click="onSubmit()">
        Print
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
          { InvoiceNo: '', Date: '',Amount: '', Customer: '' },
          { InvoiceNo: '', Date: '',Amount: '', Customer: '' },
          { InvoiceNo: '', Date: '',Amount: '', Customer: '' },
          { InvoiceNo: '', Date: '',Amount: '', Customer: '' },
        ]

    };
  },
}
</script>

<style>

</style>