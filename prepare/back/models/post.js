models.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('User', { //mysql에 users 테이블 생성
    //id는 기본 생성
    content: {
      type: DataTypes.TEXT,
      allownull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', //한글 + 이모티콘 저장

  });

  Post.associate = db = {};
  return Post;
}