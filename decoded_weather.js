function decodeUplink(input) {
  var data={};
  data.temp=((input.bytes[0]<<32)+(input.bytes[1]<<16)+(input.bytes[2]<<8)+(input.bytes[3]))/100;
  data.humidity=((input.bytes[4]<<32)+(input.bytes[5]<<16)+(input.bytes[6]<<8)+input.bytes[7])/1000;
  data.gas=((input.bytes[8]<<32)+(input.bytes[9]<<16)+(input.bytes[10]<<8)+input.bytes[11])/100;
  data.pressure=((input.bytes[12]<<32)+(input.bytes[13]<<16)+(input.bytes[14]<<8)+input.bytes[15])/100;
  data.battery=((input.bytes[16]<<8)+(input.bytes[17]))/50;//afinar empaquetamiento.....añadir un byte mas
  data.battery_level=((input.bytes[16]<<8)+(input.bytes[17])/254)*100;
  
  return {
    data: data,
    warnings: [],
    errors: []
  };
}