const express = require("express");
const router = express.Router();
const conn = require("./../db");

/**
 * 获取学生列表
 */
router.get("/api/getStuList", (req, res) => {
  let sqlStr = "select * from students";
  conn.query(sqlStr, (err, results) => {
    if (err)
      return res.json({
        err_code: 1,
        message: "获取数据失败",
        affextedRows: 0,
      });
    res.json({
      success_code: 200,
      message: results,
      affextedRows: results.affextedRows,
    });
  });
});

module.exports = router;
