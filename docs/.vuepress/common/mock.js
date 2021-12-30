import Mock from 'mockjs'

let inited = false
export const setupMock = () => {
  if (inited) return
  inited = true
  
  Mock.setup({
    timeout: '200-500'
  })
}

Mock.mock(/^\/api\/tablelist/, 'get', {
  "code": 0,
  "msg": "@title",
  "data|15-25": [
    {
      "warehouseCode": "@word(10, 15)",
      "warehouseName": "@title(3)",
      "workareaCode": "@word(10, 15)",
      "workareaName": "@title(2)",
      "status": "@pick([1,0])",
      "creationDate": "@date(T)",
      "creator": "@name"
    }
  ]
})

Mock.mock(/^\/api\/form/, 'get', {
  "code": 0,
  "msg": "@title",
  "data": {
    "item1": "@word",
    "item2": "@word",
    "item3|1-100": 1
  }
})

Mock.mock(/^\/api\/warehouselist/, 'get', {
  "code": 0,
  "msg": "@title",
  "data|5-10": [
    {
      "id|+1": 9,
      "warehouseCode": "@uuid",
      "warehouseName": "@title"
    }
  ]
})

Mock.mock(/^\/api\/tablepaginglist/, 'get', {
  "code": 0,
  "msg": "@title",
  "data": {
    "list|10": [
      {
        "warehouseCode": "@word(10, 15)",
        "warehouseName": "@title",
        "workareaCode": "@word(10, 15)",
        "workareaName": "@title",
        "status": "@pick([1,0])",
        "creationDate": "@date(T)",
        "creator": "@name"
      }
    ],
    "total": 100
  }
})

Mock.mock(/^\/api\/provinces/, 'get', {
  "code": 0,
  "msg": "@title",
  "data|10": [
    {
      "code": "@word",
      "name": "@province"
    }
  ]
})

Mock.mock(/^\/api\/cities/, 'get', {
  "code": 0,
  "msg": "@title",
  "data|10": [
    {
      "code": "@word",
      "name": "@city"
    }
  ]
})

Mock.mock(/^\/api_v1\/dict\/batchQuery/, 'post', {
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

Mock.mock(/^\/api\/users/, 'get', {
  "code": 0,
  "msg": "@title",
  "data": {
    "total": 100,
    "list|10": [
      {
        "id": "@id",
        "name": "@name",
        "role": "@title",
        "createTime": "@date",
        "createBy": "@name"
      }
    ]
  }
})

Mock.mock(/^\/api\/users/, 'post', {
  "code": 0,
  "msg": "创建成功！"
})

Mock.mock(/^\/api\/users\/\d+/, 'put', {
  "code": 0,
  "msg": "修改成功！"
})

Mock.mock(/^\/api\/users\/\d+/, 'delete', {
  "code": 0,
  "msg": "删除成功！"
})

Mock.mock(/^\/api\/users\/\d+/, 'get', {
  "code": 0,
  "msg": "@title",
  "data": {
    "id": "@id",
    "name": "@name",
    "role": "@title",
    "createTime": "@date",
    "createBy": "@name"
  }
})

//规则列表
Mock.mock(/^\/stationConfigController\/queryBaseStationPriorityRuleByRuleId/, 'get', {
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
        "baseStationPriorityDetails": [
          {
            "createBy": "admin",
            "createDate": 1638857969559,
            "lastUpdateBy": "admin",
            "lastUpdateDate": 1638857969559,
            "status": 1,
            "rowNum": null,
            "id": 1495,
            "priorityId": 178,
            "priority": 1,
            "priorityValue": "1",
            "priorityValueName": "单品单件"
          },
          {
            "createBy": "admin",
            "createDate": 1638857969559,
            "lastUpdateBy": "admin",
            "lastUpdateDate": 1638857969559,
            "status": 2,
            "rowNum": null,
            "id": 1496,
            "priorityId": 178,
            "priority": 2,
            "priorityValue": "2",
            "priorityValueName": "单品多件"
          }
        ]
      }
    ]
  },
  "succ": true
})

//用户列表
Mock.mock(/^\/coreresource\/auth\/user\/pageQuery\/v1/, 'get', {
  "code": 0,
  "msg": "{\"c\":\"lang.btc.common.util.apiresult.success\"}",
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "recordList": [
      {
        "userId": 273,
        "userName": "yanss01",
        "realName": "yanss01",
        "password": null,
        "email": null,
        "phone": "15089762354",
        "salt": null,
        "status": 1,
        "createTime": 1639382253000,
        "creator": 1,
        "updateTime": 1639382253000,
        "updater": null,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190000,
        "expireDate": "2024-12-12 15:56:30.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253000,
        "validationDate": 1639382253000,
        "passwordInit": 0,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": null,
        "roleNames": "bbb,aaa,测试关联用户,aaaaaaaa,yan001",
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
      },
      {
        "userId": 274,
        "userName": "5130026713",
        "realName": "崔芳",
        "password": null,
        "email": null,
        "phone": "",
        "salt": null,
        "status": 1,
        "createTime": 1639382253001,
        "creator": 2,
        "updateTime": 1639382253001,
        "updater": 1,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190001,
        "expireDate": "2024-12-08 16:50:51.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253001,
        "validationDate": 1639382253001,
        "passwordInit": 1,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": "admin",
        "roleNames": "bbb,aaa,ccc,SONY,测试关联用户",
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
      },
      {
        "userId": 275,
        "userName": "5125021615",
        "realName": "潘志刚",
        "password": null,
        "email": null,
        "phone": "",
        "salt": null,
        "status": 1,
        "createTime": 1639382253002,
        "creator": 3,
        "updateTime": 1639382253002,
        "updater": 1,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190002,
        "expireDate": "2024-12-08 16:50:51.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253002,
        "validationDate": 1639382253002,
        "passwordInit": 2,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": "admin",
        "roleNames": "aaa,SONY,bbb,测试关联用户",
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
      },
      {
        "userId": 276,
        "userName": "WB20213167",
        "realName": "李强",
        "password": null,
        "email": null,
        "phone": "",
        "salt": null,
        "status": 1,
        "createTime": 1639382253003,
        "creator": 4,
        "updateTime": 1639382253003,
        "updater": 1,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190003,
        "expireDate": "2024-10-06 14:02:20.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253003,
        "validationDate": 1639382253003,
        "passwordInit": 3,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": "admin",
        "roleNames": "SONY",
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
      },
      {
        "userId": 277,
        "userName": "WB20212545",
        "realName": "董红姗",
        "password": null,
        "email": null,
        "phone": "",
        "salt": null,
        "status": 1,
        "createTime": 1639382253004,
        "creator": 5,
        "updateTime": 1639382253004,
        "updater": 1,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190004,
        "expireDate": "2024-10-06 14:02:20.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253004,
        "validationDate": 1639382253004,
        "passwordInit": 4,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": "admin",
        "roleNames": "SONY",
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
      },
      {
        "userId": 278,
        "userName": "WB20211423",
        "realName": "周海伟",
        "password": null,
        "email": null,
        "phone": "",
        "salt": null,
        "status": 1,
        "createTime": 1639382253005,
        "creator": 6,
        "updateTime": 1639382253005,
        "updater": 1,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190005,
        "expireDate": "2024-10-06 14:02:20.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253005,
        "validationDate": 1639382253005,
        "passwordInit": 5,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": "admin",
        "roleNames": "SONY",
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
      },
      {
        "userId": 279,
        "userName": "5130025433",
        "realName": "江洁星",
        "password": null,
        "email": null,
        "phone": "",
        "salt": null,
        "status": 1,
        "createTime": 1639382253006,
        "creator": 7,
        "updateTime": 1639382253006,
        "updater": 1,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190006,
        "expireDate": "2024-10-06 14:02:20.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253006,
        "validationDate": 1639382253006,
        "passwordInit": 6,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": "admin",
        "roleNames": "SONY",
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
      },
      {
        "userId": 280,
        "userName": "5130019688",
        "realName": "刘洪",
        "password": null,
        "email": null,
        "phone": "",
        "salt": null,
        "status": 1,
        "createTime": 1639382253007,
        "creator": 8,
        "updateTime": 1639382253007,
        "updater": 1,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190007,
        "expireDate": "2024-10-06 14:02:20.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253007,
        "validationDate": 1639382253007,
        "passwordInit": 7,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": "admin",
        "roleNames": "SONY",
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
      },
      {
        "userId": 281,
        "userName": "5130030054",
        "realName": "程华",
        "password": null,
        "email": null,
        "phone": "",
        "salt": null,
        "status": 1,
        "createTime": 1639382253008,
        "creator": 9,
        "updateTime": 1639382253008,
        "updater": 1,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190008,
        "expireDate": "2024-10-06 14:02:20.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253008,
        "validationDate": 1639382253008,
        "passwordInit": 8,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": "admin",
        "roleNames": "SONY",
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
      },
      {
        "userId": 282,
        "userName": "5130040410",
        "realName": "徐爱芹",
        "password": null,
        "email": null,
        "phone": "",
        "salt": null,
        "status": 1,
        "createTime": 1639382253009,
        "creator": 10,
        "updateTime": 1639382253009,
        "updater": 1,
        "external": null,
        "isSpecialized": 0,
        "departmentId": null,
        "remark": null,
        "company": null,
        "birthday": null,
        "gender": null,
        "userType": 1,
        "expireTimestamp": 1733990190009,
        "expireDate": "2024-10-06 14:02:20.0",
        "canceled": 0,
        "passwordUpdateTime": 1639382253009,
        "validationDate": 1639382253009,
        "passwordInit": 9,
        "passwordModify": null,
        "creatorName": "admin",
        "updaterName": "admin",
        "roleNames": "SONY",
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
}
)

//树列表
Mock.mock(/^\/waresType\/queryTreeWaresTypeList/, 'get', {
  "code": 0,
  "msg": "success",
  "data": [
    {
      "id": 1,
      "text": "lang.wms.fed.classification",
      "nodes": [
        {
          "nodes": [
            {
              "id": 12,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 14,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 15,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 13,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 16,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 17,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 8,
          "text": "Fashion_sub01"
        },
        {
          "nodes": [
            {
              "id": 14,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 18,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 19,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 15,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 20,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 21,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 9,
          "text": "Fashion_sub02"
        }
      ]
    },
    {
      "id": 2,
      "text": "Fashion",
      "nodes": [
        {
          "nodes": [
            {
              "id": 16,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 22,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 23,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 17,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 24,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 25,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 10,
          "text": "Fashion_sub01"
        },
        {
          "nodes": [
            {
              "id": 18,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 26,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 27,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 19,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 28,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 29,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 11,
          "text": "Fashion_sub02"
        }
      ]
    },
    {
      "id": 3,
      "text": "B",
      "nodes": [
        {
          "nodes": [
            {
              "id": 20,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 30,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 31,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 21,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 32,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 33,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 12,
          "text": "Fashion_sub01"
        },
        {
          "nodes": [
            {
              "id": 22,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 34,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 35,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 23,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 36,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 37,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 13,
          "text": "Fashion_sub02"
        }
      ]
    },
    {
      "id": 4,
      "text": "189",
      "nodes": [
        {
          "nodes": [
            {
              "id": 24,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 38,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 39,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 25,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 40,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 41,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 14,
          "text": "Fashion_sub01"
        },
        {
          "nodes": [
            {
              "id": 26,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 42,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 43,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 27,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 44,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 45,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 15,
          "text": "Fashion_sub02"
        }
      ]
    },
    {
      "id": 5,
      "text": "0",
      "nodes": [
        {
          "nodes": [
            {
              "id": 28,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 46,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 47,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 29,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 48,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 49,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 16,
          "text": "Fashion_sub01"
        },
        {
          "nodes": [
            {
              "id": 30,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 50,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 51,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 31,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 52,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 53,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 17,
          "text": "Fashion_sub02"
        }
      ]
    },
    {
      "id": 6,
      "text": "非食品",
      "nodes": [
        {
          "nodes": [
            {
              "id": 32,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 54,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 55,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 33,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 56,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 57,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 18,
          "text": "Fashion_sub01"
        },
        {
          "nodes": [
            {
              "id": 34,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 58,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 59,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 35,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 60,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 61,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 19,
          "text": "Fashion_sub02"
        }
      ]
    },
    {
      "id": 7,
      "text": "A",
      "nodes": [
        {
          "nodes": [
            {
              "id": 36,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 62,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 63,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 37,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 64,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 65,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 20,
          "text": "Fashion_sub01"
        },
        {
          "nodes": [
            {
              "id": 38,
              "text": "Fashion_sub0101",
              "nodes": [
                {
                  "id": 66,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 67,
                  "text": "Fashion_sub020202"
                }
              ]
            },
            {
              "id": 39,
              "text": "Fashion_sub0202",
              "nodes": [
                {
                  "id": 68,
                  "text": "Fashion_sub010101"
                },
                {
                  "id": 69,
                  "text": "Fashion_sub020202"
                }
              ]
            }
          ],
          "id": 21,
          "text": "Fashion_sub02"
        }
      ]
    }
  ],
  "succ": true
}
)
