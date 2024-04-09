import React, {useEffect, useState} from 'react';
import { getList } from '../lib/api/post'
import { useHistory, Link } from 'react-router-dom'

const List = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    handleGetList();
  }, [])

  const handleGetList = async () => {
    try {
      const res = await getList();
      console.log(res.data)
      setDataList(res.data)
      } catch (e) {
      console.log(e);
      };
    }

  return (
    <>
    <h1>投稿リスト。</h1>
    <table border='7' cellspacing='5' cellpadding='3' width='500'>
      <tr>
        <th>ID</th>
        <th>タイトル</th>
        <th>内容</th>
      </tr>
      {
        dataList.map((data, index) => (
          <tr key={index}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.content}</td>
          </tr>
        ))
      } 
      </table>
    </>
  );
};

export default List;
