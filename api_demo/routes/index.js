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

/**
 * 往数据库中插入学生记录
 */
router.post("/api/insertStuList", function (req, res) {
  conn.query("INSERT INTO students SET  ?", req.body, (err, results) => {
    if (err)
      return res.json({
        err_code: 1,
        message: "插入数据失败",
        affextedRows: 0,
      });
    res.json({ success_code: 200, message: "插入成功" });
  });
});

/**
 * 删除数据库中的一条学生记录
 */
router.post("/api/delStuList", (req, res) => {
  console.log(req.body);
  let sqlStr = "DELETE FROM students WHERE id = ?";
  conn.query(sqlStr, [req.body.id], (err, results) => {
    if (err)
      return res.json({
        err_code: 1,
        message: "删除数据失败",
        affextedRows: 0,
      });
    res.json({ success_code: 200, message: "删除数据失败", affextedRows: 0 });
  });
});

module.exports = router;
