var stream = {
    "name": "ns1:timeSeriesResponseType",
    "declaredType": "org.cuahsi.waterml.TimeSeriesResponseType",
    "scope": "javax.xml.bind.JAXBElement$GlobalScope",
    "value": {
        "queryInfo": {
            "queryURL": "http://waterservices.usgs.gov/nwis/iv/format=json&stateCd=pa&parameterCd=00004,00010,00032,00035,00045,00060,00061&siteType=ST&siteStatus=active",
            "criteria": {
                "locationParam": "[]", "variableParam": "[00004, 00010, 00032, 00035, 00045, 00060, 00061]", "parameter": []
            },
            "note": [
                { "value": "[pa]", "title": "filter:stateCd" },
                { "value": "[ST]", "title": "filter:siteType" },
                { "value": "[mode=LATEST, modifiedSince=null]", "title": "filter:timeRange" },
                { "value": "methodIds=[ALL]", "title": "filter:methodId" },
                { "value": "2018-10-31T23:14:52.219Z", "title": "requestDT" },
                { "value": "c53d42e0-dd62-11e8-9faa-6cae8b6642f6", "title": "requestId" },
                { "value": "Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.", "title": "disclaimer" },
                { "value": "caas01", "title": "server" }
            ],
            "timeSeries": [
                {
                    "sourceInfo": {
                        "siteName": "Equinunk Creek near Dillontown, PA",
                        "siteCode": [{
                            "value": "01427195", "network": "NWIS", "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00", "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00", "zoneAbbreviation": "EDT"
                            },
                            "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326", "latitude": 41.84027778, "longitude": -75.2383333
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST", "name": "siteTypeCd"
                        }, {
                            "value": "02040101", "name": "hucCd"
                        }, {
                            "value": "42", "name": "stateCd"
                        },{
                            "value": "53",
                            "name": "watertemp"
                        },{
                            "value": "54",
                            "name": "airtemp"
                        },{
                            "value": "spring",
                            "name": "fishingszn"
                        },{
                            "value": "yes",
                            "name": "polluted"
                        }, {
                            "value": "42127", "name": "countyCd"
                        }
                        ]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00010", "network": "NWIS", "vocabulary": "NWIS:UnitValues", "variableID": 45807042, "default": true
                        }],
                        "variableName": "Temperature, water, &#176;C",
                        "variableDescription": "Temperature, water, degrees Celsius",
                        "valueType": "Derived Value",
                        "unit": {
                            "unitCode": "deg C"
                        },
                        "options": {
                            "option": [{
                                "name": "Statistic", "optionCode": "00000"
                            }]
                        },
                        "note": [], "noDataValue": -999999.0, "variableProperty": [], "oid": "45807042"
                    },
                    "values": [{
                        "value": [{
                            "value": "8.7", "qualifiers": ["P"], "dateTime": "2018-10-31T18:30:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P", "qualifierDescription": "Provisional data subject to revision.", "qualifierID": 0, "network": "NWIS", "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "", "methodID": 240631
                        }],
                        "source": [], "offset": [], "sample": [], "censorCode": []
                    }],
                    "name": "USGS:01427195:00010:00000"
                }, {
                    "sourceInfo": {
                        "siteName": "Spring Creek at Houserville, PA",
                        "siteCode": [{
                            "value": "01546400", "network": "NWIS", "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00", "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00", "zoneAbbreviation": "EDT"
                            },
                            "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326", "latitude": 40.8336726, "longitude": -77.82750108
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST", "name": "siteTypeCd"
                        }, {
                            "value": "02050204", "name": "hucCd"
                        }, {
                            "value": "42", "name": "stateCd"
                        },{
                            "value": "58",
                            "name": "watertemp"
                        },{
                            "value": "71",
                            "name": "airtemp"
                        },{
                            "value": "summer",
                            "name": "fishingszn"
                        },{
                            "value": "yes",
                            "name": "polluted"
                        }, {
                            "value": "42027", "name": "countyCd"
                        }
                        ]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00060", "network": "NWIS", "vocabulary": "NWIS:UnitValues", "variableID": 45807197, "default": true
                        }],
                        "variableName": "Streamflow, ft&#179;/s",
                        "variableDescription": "Discharge, cubic feet per second",
                        "valueType": "Derived Value",
                        "unit": {
                            "unitCode": "ft3/s"
                        },
                        "options": {
                            "option": [{
                                "name": "Statistic", "optionCode": "00000"
                            }]
                        },
                        "note": [], "noDataValue": -999999.0, "variableProperty": [], "oid": "45807197"
                    },
                    "values": [{
                        "value": [{
                            "value": "115", "qualifiers": ["P"], "dateTime": "2018-10-31T18:45:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P", "qualifierDescription": "Provisional data subject to revision.", "qualifierID": 0, "network": "NWIS", "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "", "methodID": 121885
                        }],
                        "source": [], "offset": [], "sample": [], "censorCode": []
                    }],
                    "name": "USGS:01546400:00060:00000"
                }, {
                    "sourceInfo": {
                        "siteName": "Spring Creek near Axemann, PA",
                        "siteCode": [{
                            "value": "01546500", "network": "NWIS", "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00", "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00", "zoneAbbreviation": "EDT"
                            }, "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326", "latitude": 40.88978334, "longitude": -77.794168
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST", "name": "siteTypeCd"
                        }, {
                            "value": "02050204", "name": "hucCd"
                        }, {
                            "value": "42", "name": "stateCd"
                        },{
                            "value": "36",
                            "name": "watertemp"
                        },{
                            "value": "47",
                            "name": "airtemp"
                        },{
                            "value": "summer",
                            "name": "fishingszn"
                        },{
                            "value": "no",
                            "name": "polluted"
                        }, {
                            "value": "42027", "name": "countyCd"
                        }]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00060", "network": "NWIS", "vocabulary": "NWIS:UnitValues", "variableID": 45807197, "default": true
                        }],
                        "variableName": "Streamflow, ft&#179;/s",
                        "variableDescription": "Discharge, cubic feet per second",
                        "valueType": "Derived Value",
                        "unit": { "unitCode": "ft3/s" },
                        "options": {
                            "option": [{
                                "name": "Statistic", "optionCode": "00000"
                            }]
                        },
                        "note": [],
                        "noDataValue": -999999.0,
                        "variableProperty": [],
                        "oid": "45807197"
                    },
                    "values": [{
                        "value": [{
                            "value": "154", "qualifiers": ["P"], "dateTime": "2018-10-31T18:45:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P", "qualifierDescription": "Provisional data subject to revision.", "qualifierID": 0, "network": "NWIS", "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "", "methodID": 121889
                        }],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }],
                    "name": "USGS:01546500:00060:00000"
                }, {
                    "sourceInfo": {
                        "siteName": "Spring Creek at Milesburg, PA",
                        "siteCode": [{
                            "value": "01547100", "network": "NWIS", "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00", "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00", "zoneAbbreviation": "EDT"
                            },
                            "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326", "latitude": 40.9317273, "longitude": -77.7855575
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST", "name": "siteTypeCd"
                        }, {
                            "value": "02050204", "name": "hucCd"
                        }, {
                            "value": "42", "name": "stateCd"
                        }, {
                            "value": "55",
                            "name": "watertemp"
                        },{
                            "value": "48",
                            "name": "airtemp"
                        },{
                            "value": "fall",
                            "name": "fishingszn"
                        },{
                            "value": "yes",
                            "name": "polluted"
                        },{
                            "value": "42027", "name": "countyCd"
                        }
                        ]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00060", "network": "NWIS", "vocabulary": "NWIS:UnitValues", "variableID": 45807197, "default": true
                        }],
                        "variableName": "Streamflow, ft&#179;/s",
                        "variableDescription": "Discharge, cubic feet per second",
                        "valueType": "Derived Value",
                        "unit": {
                            "unitCode": "ft3/s"
                        },
                        "options": {
                            "option": [{
                                "name": "Statistic", "optionCode": "00000"
                            }]
                        },
                        "note": [],
                        "noDataValue": -999999.0,
                        "variableProperty": [],
                        "oid": "45807197"
                    },
                    "values": [{
                        "value": [{
                            "value": "410", "qualifiers": ["P"], "dateTime": "2018-10-31T18:15:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P",
                            "qualifierDescription": "Provisional data subject to revision.",
                            "qualifierID": 0,
                            "network": "NWIS",
                            "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "", "methodID": 121891
                        }],
                        "source": [], "offset": [], "sample": [], "censorCode": []
                    }],
                    "name": "USGS:01547100:00060:00000"
                }, {
                    "sourceInfo": {
                        "siteName": "Bald Eagle Creek bl Spring Creek at Milesburg, PA",
                        "siteCode": [{
                            "value": "01547200",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00",
                                "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00", "zoneAbbreviation": "EDT"
                            },
                            "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326", "latitude": 40.943116, "longitude": -77.78639109
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST", "name": "siteTypeCd"
                        }, {
                            "value": "02050204", "name": "hucCd"
                        }, {
                            "value": "42", "name": "stateCd"
                        }, {
                            "value": "46",
                            "name": "watertemp"
                        },{
                            "value": "53",
                            "name": "airtemp"
                        },{
                            "value": "summer",
                            "name": "fishingszn"
                        },{
                            "value": "no",
                            "name": "polluted"
                        },{
                            "value": "42027", "name": "countyCd"
                        }]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197,
                            "default": true
                        }],
                        "variableName": "Streamflow, ft&#179;/s",
                        "variableDescription": "Discharge, cubic feet per second",
                        "valueType": "Derived Value",
                        "unit": { "unitCode": "ft3/s" },
                        "options": {
                            "option": [{
                                "name": "Statistic", "optionCode": "00000"
                            }]
                        },
                        "note": [], "noDataValue": -999999.0, "variableProperty": [], "oid": "45807197"
                    },
                    "values": [{
                        "value": [{
                            "value": "711", "qualifiers": ["P"], "dateTime": "2018-10-31T19:00:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P",
                            "qualifierDescription": "Provisional data subject to revision.",
                            "qualifierID": 0,
                            "network": "NWIS",
                            "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "", "methodID": 121893
                        }],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }],
                    "name": "USGS:01547200:00060:00000"
                }, {
                    "sourceInfo": {
                        "siteName": "Little Juniata River at Spruce Creek, PA",
                        "siteCode": [{
                            "value": "01558000", "network": "NWIS", "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00", "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00", "zoneAbbreviation": "EDT"
                            },
                            "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326", "latitude": 40.61256655, "longitude": -78.1405645
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST", "name": "siteTypeCd"
                        }, {
                            "value": "02050302", "name": "hucCd"
                        }, {
                            "value": "42", "name": "stateCd"
                        },{
                            "value": "58",
                            "name": "watertemp"
                        },{
                            "value": "70",
                            "name": "airtemp"
                        },{
                            "value": "fall",
                            "name": "fishingszn"
                        },{
                            "value": "no",
                            "name": "polluted"
                        }, {
                            "value": "42061", "name": "countyCd"
                        }]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197, "default": true
                        }],
                        "variableName": "Streamflow, ft&#179;/s",
                        "variableDescription": "Discharge, cubic feet per second",
                        "valueType": "Derived Value",
                        "unit": {
                            "unitCode": "ft3/s"
                        },
                        "options": {
                            "option": [{
                                "name": "Statistic",
                                "optionCode": "00000"
                            }]
                        },
                        "note": [], "noDataValue": -999999.0, "variableProperty": [], "oid": "45807197"
                    },
                    "values": [{
                        "value": [{
                            "value": "617",
                            "qualifiers": ["P"],
                            "dateTime": "2018-10-31T18:15:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P",
                            "qualifierDescription": "Provisional data subject to revision.",
                            "qualifierID": 0,
                            "network": "NWIS",
                            "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "",
                            "methodID": 122000
                        }],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }],
                    "name": "USGS:01558000:00060:00000"
                }, {
                    "sourceInfo": {
                        "siteName": "Kishacoquillas Creek at Reedsville, PA",
                        "siteCode": [{
                            "value": "01565000", "network": "NWIS", "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00",
                                "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00",
                                "zoneAbbreviation": "EDT"
                            },
                            "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326",
                                "latitude": 40.65479256,
                                "longitude": -77.5830499
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST",
                            "name": "siteTypeCd"
                        }, {
                            "value": "02050304", "name": "hucCd"
                        }, {
                            "value": "42", "name": "stateCd"
                        }, {
                            "value": "39",
                            "name": "watertemp"
                        },{
                            "value": "46",
                            "name": "airtemp"
                        },{
                            "value": "spring",
                            "name": "fishingszn"
                        },{
                            "value": "no",
                            "name": "polluted"
                        },{
                            "value": "42087", "name": "countyCd"
                        }]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197,
                            "default": true
                        }],
                        "variableName": "Streamflow, ft&#179;/s",
                        "variableDescription": "Discharge, cubic feet per second",
                        "valueType": "Derived Value",
                        "unit": {
                            "unitCode": "ft3/s"
                        },
                        "options": {
                            "option": [{
                                "name": "Statistic",
                                "optionCode": "00000"
                            }]
                        },
                        "note": [],
                        "noDataValue": -999999.0,
                        "variableProperty": [],
                        "oid": "45807197"
                    },
                    "values": [{
                        "value": [{
                            "value": "273",
                            "qualifiers": ["P"],
                            "dateTime": "2018-10-31T19:00:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P",
                            "qualifierDescription": "Provisional data subject to revision.",
                            "qualifierID": 0, "network": "NWIS", "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "",
                            "methodID": 122037
                        }],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }],
                    "name": "USGS:01565000:00060:00000"
                }, {
                    "sourceInfo": {
                        "siteName": "Bald Eagle Creek at Blanchard, PA",
                        "siteCode": [{
                            "value": "01547500",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00",
                                "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00",
                                "zoneAbbreviation": "EDT"
                            },
                            "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326",
                                "latitude": 41.05173127,
                                "longitude": -77.6044379
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST",
                            "name": "siteTypeCd"
                        }, {
                            "value": "02050204",
                            "name": "hucCd"
                        }, {
                            "value": "42",
                            "name": "stateCd"
                        },{
                            "value": "37",
                            "name": "watertemp"
                        },{
                            "value": "44",
                            "name": "airtemp"
                        },{
                            "value": "summer",
                            "name": "fishingszn"
                        },{
                            "value": "no",
                            "name": "polluted"
                        }, {
                            "value": "42027",
                            "name": "countyCd"
                        }]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197,
                            "default": true
                        }],
                        "variableName": "Streamflow, ft&#179;/s",
                        "variableDescription": "Discharge, cubic feet per second",
                        "valueType": "Derived Value",
                        "unit": {
                            "unitCode": "ft3/s"
                        },
                        "options": {
                            "option": [{
                                "name": "Statistic",
                                "optionCode": "00000"
                            }]
                        },
                        "note": [], "noDataValue": -999999.0, "variableProperty": [], "oid": "45807197"
                    },
                    "values": [{
                        "value": [{
                            "value": "703",
                            "qualifiers": ["P"],
                            "dateTime": "2018-10-31T19:00:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P",
                            "qualifierDescription": "Provisional data subject to revision.",
                            "qualifierID": 0,
                            "network": "NWIS",
                            "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "",
                            "methodID": 121900
                        }],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }],
                    "name": "USGS:01547500:00060:00000"
                }, {
                    "sourceInfo": {
                        "siteName": "WB Susquehanna River at Karthaus, PA",
                        "siteCode": [{
                            "value": "01542500",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00",
                                "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00",
                                "zoneAbbreviation": "EDT"
                            },
                            "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326",
                                "latitude": 41.11755906,
                                "longitude": -78.108896
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST",
                            "name": "siteTypeCd"
                        }, {
                            "value": "02050201",
                            "name": "hucCd"
                        }, {
                            "value": "42",
                            "name": "stateCd"
                        },{
                            "value": "55",
                            "name": "watertemp"
                        },{
                            "value": "65",
                            "name": "airtemp"
                        },{
                            "value": "fall",
                            "name": "fishingszn"
                        },{
                            "value": "no",
                            "name": "polluted"
                        }, {
                            "value": "42033", "name": "countyCd"
                        }]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197, "default": true
                        }],
                        "variableName": "Streamflow, ft&#179;/s",
                        "variableDescription": "Discharge, cubic feet per second",
                        "valueType": "Derived Value",
                        "unit": {
                            "unitCode": "ft3/s"
                        },
                        "options": {
                            "option": [{
                                "name": "Statistic",
                                "optionCode": "00000"
                            }]
                        },
                        "note": [],
                        "noDataValue": -999999.0, "variableProperty": [], "oid": "45807197"
                    },
                    "values": [{
                        "value": [{
                            "value": "4970",
                            "qualifiers": ["P"],
                            "dateTime": "2018-10-31T18:30:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P",
                            "qualifierDescription": "Provisional data subject to revision.",
                            "qualifierID": 0,
                            "network": "NWIS",
                            "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "",
                            "methodID": 121832
                        }],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }],
                    "name": "USGS:01542500:00060:00000"
                }, {
                    "sourceInfo": {
                        "siteName": "Mahoning Creek at Punxsutawney, PA",
                        "siteCode": [{
                            "value": "03034000",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }],
                        "timeZoneInfo": {
                            "defaultTimeZone": {
                                "zoneOffset": "-05:00",
                                "zoneAbbreviation": "EST"
                            },
                            "daylightSavingsTimeZone": {
                                "zoneOffset": "-04:00",
                                "zoneAbbreviation": "EDT"
                            },
                            "siteUsesDaylightSavingsTime": true
                        },
                        "geoLocation": {
                            "geogLocation": {
                                "srs": "EPSG:4326", "latitude": 40.93923105, "longitude": -79.00836738
                            },
                            "localSiteXY": []
                        },
                        "note": [],
                        "siteType": [],
                        "siteProperty": [{
                            "value": "ST",
                            "name": "siteTypeCd"
                        }, {
                            "value": "05010006",
                            "name": "hucCd"
                        }, {
                            "value": "42",
                            "name": "stateCd"
                        }, {
                            "value": "36",
                            "name": "watertemp"
                        },{
                            "value": "45",
                            "name": "airtemp"
                        },{
                            "value": "winter",
                            "name": "fishingszn"
                        },{
                            "value": "no",
                            "name": "polluted"
                        },{
                            "value": "42065",
                            "name": "countyCd"
                        }]
                    },
                    "variable": {
                        "variableCode": [{
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197, "default": true
                        }],
                        "variableName": "Streamflow, ft&#179;/s",
                        "variableDescription": "Discharge, cubic feet per second",
                        "valueType": "Derived Value",
                        "unit": {
                            "unitCode": "ft3/s"
                        },
                        "options": {
                            "option": [{
                                "name": "Statistic",
                                "optionCode": "00000"
                            }]
                        },
                        "note": [], "noDataValue": -999999.0, "variableProperty": [], "oid": "45807197"
                    },
                    "values": [{
                        "value": [{
                            "value": "538",
                            "qualifiers": ["P"],
                            "dateTime": "2018-10-31T18:45:00.000-04:00"
                        }],
                        "qualifier": [{
                            "qualifierCode": "P",
                            "qualifierDescription": "Provisional data subject to revision.",
                            "qualifierID": 0,
                            "network": "NWIS",
                            "vocabulary": "uv_rmk_cd"
                        }],
                        "qualityControlLevel": [],
                        "method": [{
                            "methodDescription": "",
                            "methodID": 122383
                        }],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }],
                    "name": "USGS:03034000:00060:00000"
                }
            ]
        }
    }
}