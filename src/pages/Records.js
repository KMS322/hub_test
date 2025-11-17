import { useState } from 'react'
import Header from '../components/Header'
import { dummyRecords } from '../data/dummyData'
import './Records.css'

function Records() {
  const [records] = useState(dummyRecords)
  const [sortBy, setSortBy] = useState('date') // date, patient, device
  const [sortOrder, setSortOrder] = useState('desc') // asc, desc
  const [selectedRecords, setSelectedRecords] = useState([])

  // 정렬된 레코드
  const sortedRecords = [...records].sort((a, b) => {
    let comparison = 0
    if (sortBy === 'date') {
      comparison = new Date(a.createdAt) - new Date(b.createdAt)
    } else if (sortBy === 'patient') {
      comparison = a.patientName.localeCompare(b.patientName)
    } else if (sortBy === 'device') {
      comparison = a.deviceName.localeCompare(b.deviceName)
    }
    return sortOrder === 'asc' ? comparison : -comparison
  })

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRecords(sortedRecords.map(r => r.id))
    } else {
      setSelectedRecords([])
    }
  }

  const handleSelectRecord = (recordId) => {
    if (selectedRecords.includes(recordId)) {
      setSelectedRecords(selectedRecords.filter(id => id !== recordId))
    } else {
      setSelectedRecords([...selectedRecords, recordId])
    }
  }

  const handleDownload = (recordId) => {
    // 더미: 다운로드 처리
    console.log('Download:', recordId)
  }

  const handleDownloadSelected = () => {
    // 더미: 선택된 파일 다운로드
    console.log('Download selected:', selectedRecords)
  }

  const handleDelete = (recordId) => {
    // 더미: 삭제 처리
    console.log('Delete:', recordId)
  }

  return (
    <div className="records-page">
      <Header />
      <div className="records-container">
        <div className="records-header">
          {selectedRecords.length > 0 && (
            <button className="btn-primary" onClick={handleDownloadSelected}>
              선택한 파일 다운로드 ({selectedRecords.length})
            </button>
          )}
        </div>

        <div className="records-controls">
          <div className="sort-controls">
            <label>정렬 기준:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">날짜</option>
              <option value="patient">환자</option>
              <option value="device">디바이스</option>
            </select>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="desc">최신순</option>
              <option value="asc">오래된순</option>
            </select>
          </div>
        </div>

        <div className="records-table-container">
          <table className="records-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectedRecords.length === sortedRecords.length && sortedRecords.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>파일명</th>
                <th>환자</th>
                <th>디바이스</th>
                <th>시작 시간</th>
                <th>종료 시간</th>
                <th>파일 크기</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              {sortedRecords.map(record => (
                <tr key={record.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRecords.includes(record.id)}
                      onChange={() => handleSelectRecord(record.id)}
                    />
                  </td>
                  <td>{record.fileName}</td>
                  <td>{record.patientName}</td>
                  <td>{record.deviceName}</td>
                  <td>{record.startDate}</td>
                  <td>{record.endDate}</td>
                  <td>{record.fileSize}</td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn-download"
                        onClick={() => handleDownload(record.id)}
                      >
                        다운로드
                      </button>
                      <button 
                        className="btn-delete"
                        onClick={() => handleDelete(record.id)}
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {sortedRecords.length === 0 && (
          <div className="no-data">기록이 없습니다.</div>
        )}
      </div>
    </div>
  )
}

export default Records

