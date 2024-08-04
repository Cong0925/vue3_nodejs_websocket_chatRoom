<template>
  <div>
    Home
  </div>
  <div>
    <label> config  参数</label>
    <ul>
      <li>
        <label> APP_NAME: </label>
        {{ systemConfig.APP_NAME  }}
      </li>
      <li>
        <label> APP_VER: </label>
        {{ systemConfig.APP_VER  }}
      </li>
      <li>
        <label> CORE_VER: </label>
         {{ systemConfig.CORE_VER  }}
      </li>
      <li>
        <label> API_URL: </label>
        {{ systemConfig.API_URL  }}
      </li>
    </ul>
  </div>
</template>

<script setup >
import systemConfig from "@/config";
console.log(systemConfig)

</script>

<style ></style>