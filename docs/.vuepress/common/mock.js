import Mock from 'mockjs'

let inited = false
export const setupMock = () => {
  if (inited) return
  inited = true
  
  Mock.setup({
    timeout: '200-500'
  })
}

Mock.mock(/\/api\/tablelist/, 'get', {
  "code": 0,
  "msg": "@ctitle",
  "data|15-25": [
    {
      "warehouseCode": "@word(10, 15)",
      "warehouseName": "@ctitle",
      "workareaCode": "@word(10, 15)",
      "workareaName": "@ctitle",
      "status": "@pick([1,0])",
      "creationDate": "@date(T)",
      "creator": "@cname"
    }
  ]
})

Mock.mock(/\/api\/form/, 'get', {
  "code": 0,
  "msg": "@ctitle",
  "data": {
    "item1": "@word",
    "item2": "@word",
    "item3|1-100": 1
  }
})

Mock.mock(/\/api\/warehouselist/, 'get', {
  "code": 0,
  "msg": "@ctitle",
  "data|5-10": [
    {
      "id|+1": 9,
      "warehouseCode": "@uuid",
      "warehouseName": "@ctitle"
    }
  ]
})

Mock.mock(/\/api\/tablepaginglist/, 'get', {
  "code": 0,
  "msg": "@ctitle",
  "data": {
    "list|10": [
      {
        "warehouseCode": "@word(10, 15)",
        "warehouseName": "@ctitle",
        "workareaCode": "@word(10, 15)",
        "workareaName": "@ctitle",
        "status": "@pick([1,0])",
        "creationDate": "@date(T)",
        "creator": "@cname"
      }
    ],
    "total": 100
  }
})

Mock.mock(/\/api\/provinces/, 'get', {
  "code": 0,
  "msg": "@ctitle",
  "data|10": [
    {
      "code": "@word",
      "name": "@province"
    }
  ]
})

Mock.mock(/\/api\/cities/, 'get', {
  "code": 0,
  "msg": "@ctitle",
  "data|10": [
    {
      "code": "@word",
      "name": "@city"
    }
  ]
})

Mock.mock(/\/api_v1\/dict\/batchQuery/, 'post', {
  "data": {
    "status": {
      "details|2": [
        {
          "fieldCode|+1": [
            1,
            0
          ],
          "fieldValue|+1": [
            "lang.wms.fed.available",
            "lang.wms.fed.disable"
          ]
        }
      ]
    }
  },
  "code": 0,
  "msg": "success"
})

Mock.mock(/\/api\/users/, 'get', {
  "code": 0,
  "msg": "@ctitle",
  "data": {
    "total": 100,
    "list|10": [
      {
        "id": "@id",
        "name": "@cname",
        "role": "@ctitle",
        "createTime": "@date",
        "createBy": "@cname"
      }
    ]
  }
})

Mock.mock(/\/api\/users/, 'post', {
  "code": 0,
  "msg": "创建成功！"
})

Mock.mock(/\/api\/users\/\d+/, 'put', {
  "code": 0,
  "msg": "修改成功！"
})

Mock.mock(/\/api\/users\/\d+/, 'delete', {
  "code": 0,
  "msg": "删除成功！"
})

Mock.mock(/\/api\/users\/\d+/, 'get', {
  "code": 0,
  "msg": "@ctitle",
  "data": {
    "id": "@id",
    "name": "@cname",
    "role": "@ctitle",
    "createTime": "@date",
    "createBy": "@cname"
  }
})

//规则列表
Mock.mock(/\/stationConfigController\/queryBaseStationPriorityRuleByRuleId\/\d+/, 'get', {
  "code": 0,
  "msg": "success",
  "data": {
    "createBy": "admin",
    "createDate": 1638857969559,
    "lastUpdateBy": "admin",
    "lastUpdateDate": 1638857969559,
    "status": 1,
    "rowNum": null,
    "id": 55,
    "ruleCode": "321",
    "ruleName": "32",
    "remark": null,
    "createDateQuery": null,
    "lastUpdateDateQuery": null,
    "stationType": 0,
    "priority": 20,
    "waveStructure": 1,
    "designatedContainerType": 4,
    "dynamicWaveFlag": 1,
    "baseStationPriorities": [
      {
        "createBy": "admin",
        "createDate": 1638857969559,
        "lastUpdateBy": "admin",
        "lastUpdateDate": 1638857969559,
        "status": 1,
        "rowNum": null,
        "id": 178,
        "ruleId": 55,
        "priority": 0,
        "priorityType": 1,
        "priorityValue": "订单结构",
        "remark": null,
        "dynamicWaveFlag": null,
        "stationType": null,
        "source1": "dynamic_wave_order_structure",
        "source2": "1",
        "source3": "dynamic_wave_order_structure",
        "baseStationPriorityDetails|2": [
          {
            "createBy": "admin",
            "createDate": 1638857969559,
            "lastUpdateBy": "admin",
            "lastUpdateDate": 1638857969559,
            "status|+1": 3,
            "rowNum": null,
            "id|+1": 1497,
            "priorityId": 178,
            "priority|+1": 3,
            "priorityValue|+1": [
              "1",
              "2"
            ],
            "priorityValueName|+1": [
              "单品单件",
              "单品多件"
            ]
          }
        ]
      }
    ]
  },
  "succ": true
})

//用户列表
Mock.mock(/\/coreresource\/auth\/user\/pageQuery\/v1\/\d+/, 'get', {
  "code": 0,
  "msg": "{\"c\":\"lang.btc.common.util.apiresult.success\"}",
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "recordList|10": [
      {
        "userId|+1": 283,
        "userName|+1": [
          "yanss01",
          "5130026713",
          "5125021615",
          "WB20213167",
          "WB20212545",
          "WB20211423",
          "5130025433",
          "5130019688",
          "5130030054",
          "5130040410"
        ],
        "realName|+1": [
          "yanss01",
          "崔芳",
          "潘志刚",
          "李强",
          "董红姗",
          "周海伟",
          "江洁星",
          "刘洪",
          "程华",
          "徐爱芹"
        ],
        "password": null,
        "email": null,
        "phone|+1": [
          "15089762354",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        "salt": null,
        "status": 1,
        "createTime|+1": 1639382253010,
        "creator|+1": 11,
        "updateTime|+1": 1639382253010,
        "updater|+1": [
          null,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp|+1": 1733990190010,
        "expireDate|+1": [
          "2024-12-12 15:56:30.0",
          "2024-12-08 16:50:51.0",
          "2024-12-08 16:50:51.0",
          "2024-10-06 14:02:20.0",
          "2024-10-06 14:02:20.0",
          "2024-10-06 14:02:20.0",
          "2024-10-06 14:02:20.0",
          "2024-10-06 14:02:20.0",
          "2024-10-06 14:02:20.0",
          "2024-10-06 14:02:20.0"
        ],
        "canceled": 0,
        "passwordUpdateTime|+1": 1639382253010,
        "validationDate|+1": 1639382253010,
        "passwordInit|+1": 10,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName|+1": [
          null,
          "admin",
          "admin",
          "admin",
          "admin",
          "admin",
          "admin",
          "admin",
          "admin",
          "admin"
        ],
        "roleNames|+1": [
          "bbb,aaa,测试关联用户,aaaaaaaa,yan001",
          "bbb,aaa,ccc,SONY,测试关联用户",
          "aaa,SONY,bbb,测试关联用户",
          "SONY",
          "SONY",
          "SONY",
          "SONY",
          "SONY",
          "SONY",
          "SONY"
        ],
        "roleIds": null,
        "currentMoudule": null,
        "currentCred": null,
        "subSystemCode": null,
        "menuList": null,
        "permissionList": null,
        "dataPermissionMap": null,
        "language": null,
        "permissionCodeList": null,
        "permissionFlatList": null,
        "subsystemList": null,
        "systemIdPermissionMap": null,
        "pwdExpire": false
      }
    ],
    "recordCount": 26,
    "pageCount": 4,
    "beginPageIndex": 1,
    "endPageIndex": 4
  },
  "succ": true
})

//树列表
Mock.mock(/\/waresType\/queryTreeWaresTypeList\/\d+/, 'get', {
  "code": 0,
  "msg": "success",
  "data|7": [
    {
      "id|+1": 8,
      "text|+1": [
        "lang.wms.common.fullCategory",
        "Fashion",
        "B",
        "189",
        "0",
        "非食品",
        "A"
      ],
      "nodes|2": [
        {
          "nodes|2": [
            {
              "id|+1": 40,
              "text|+1": [
                "Fashion_sub0101",
                "Fashion_sub0202"
              ],
              "nodes|2": [
                {
                  "id|+1": 70,
                  "text|+1": [
                    "Fashion_sub010101",
                    "Fashion_sub020202"
                  ]
                }
              ]
            }
          ],
          "id|+1": 22,
          "text|+1": [
            "Fashion_sub01",
            "Fashion_sub02"
          ]
        }
      ]
    }
  ],
  "succ": true
})
