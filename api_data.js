define({ "api": [
  {
    "type": "get",
    "url": "api/v1/brand/:id",
    "title": "Brand detail",
    "name": "Brand_detail",
    "group": "Brand",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": \"OK\",\n     \"message\": null,\n     \"data\": [\n         {\n             \"id\": 101,\n             \"name\": \"国士無双\",\n             \"image\": \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\",\n             \"description\": \"「獺祭」という意味は、獺が捕らえた魚を岸に並べてまるで祭りをするかのように見える、つまり、「詩や文を作るとき多くの参考資料を広げ散らすこと」。\",\n             \"brewer\": \"菊正宗酒造\",\n             \"prefecture\": \"北海道\",\n             \"city\": \"岩国市\",\n             \"products\": [\n                 {\n                     \"id\": 521,\n                     \"name\": \"南部美人　純米吟醸\",\n                     \"image\": \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\",\n                 },\n                 {\n                     \"id\": 521,\n                     \"name\": \"南部美人　純米吟醸\",\n                     \"image\": \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\",\n                 },\n                 ...\n             ]\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "doc/brand.js",
    "groupTitle": "Brand",
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "X-Requested-With: XMLHttpRequest\nContent-Type: application/json\nAuthorization: Bearer {{access_token}}",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "api/v1/brewer/:id",
    "title": "Brewer detail",
    "name": "Brewer_detail",
    "group": "Brewer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": \"OK\",\n     \"message\": null,\n     \"data\": [\n         {\n             \"id\": 1,\n             \"name\": \"旭酒造\",\n             \"prefecture\": \"北海道\",\n             \"city\": \"岩国市\",\n             \"address\": \"〒742-0422 山口県岩国市周東町獺越2167-4\"\n             \"description\": \"精米歩合50%以下の純米大吟醸「獺祭」のシリーズのみを造っているのが特徴。また杜氏を使わず、徹底的に数値化したデータを元に、醸造管理を行なって日本酒造りを行なっている。\",\n             \"images\": [\n                 \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\",\n                 \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\",\n                 \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\",\n                 \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\",\n                 \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\"\n             ]\n             \"brands\": [\n                 {\n                     \"id\": 521,\n                     \"name\": \"南部美人　純米吟醸\",\n                     \"image\": \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\",\n                 },\n                 {\n                     \"id\": 521,\n                     \"name\": \"南部美人　純米吟醸\",\n                     \"image\": \"https://sakeproduction.s3.ap-northeast-1.amazonaws.com/uploads/products/4cpIUkQjHHX6YyCFjyfYcX7svw2ouTyqw4FKaUjL.png\",\n                 },\n                 ...\n             ]\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "doc/brewer.js",
    "groupTitle": "Brewer",
    "header": {
      "examples": [
        {
          "title": "Header-Request:",
          "content": "X-Requested-With: XMLHttpRequest\nContent-Type: application/json\nAuthorization: Bearer {{access_token}}",
          "type": "String"
        }
      ]
    }
  }
] });
