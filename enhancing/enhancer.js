module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement !== 20){
  return { ...item,
  enhancement: item.enhancement + 1
  };
   } else {
    return { ...item };
   }
}

function fail(item) {
//   if (item.enhancement < 15 && item.durability > 4){
//   return { ...item,
//   durability: item.durability - 5
//   }
//    } else 
//    if (item.enhancement == 15 && item.durability > 9){
//     return { ...item,
//     durability: item.durability - 10
//     }
// } else if (item.enhancement >= 16 && item.durability > 9){
//  return { ...item,
//   enhancement: item.enhancement -1,
//   durability: item.durability - 10
//  }
// } else if (item.enhancement >= 16 && item.durability < 9){
//   return { ...item,
//    enhancement: item.enhancement -1,
//    durability: 0
//   }
//  } else if (item.enhancement == 15 && item.durability < 9){
//   return { ...item,
//    durability: 0
//   }
//  } else if (item.enhancement < 15 && item.durability < 5){
//   return { ...item,
//    durability: 0
//   }
//  }
if (item.enhancement < 15) item.durability -= 5;

if (item.enhancement >= 15) item.durability -= 10;

if (item.enhancement > 16) item.enhancement -= 1;

if (item.durability < 0) item.durability = 0;

return { ...item };

}

function repair(item) {
  return { ...item, 
    durability: 100
  };
}

function get(item) {
  if (item.enhancement > 0) item.name = `[+${item.enhancement}] ${item.name}`;
  return { ...item };
}
