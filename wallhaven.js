export default {
  // 获取分类列表
  async getCategories() {
    return [
      { name: '最近更新', id: '' },
      { name: '最终幻想', id: 'id:997' },
      { name: 'Cosplay', id: 'id:12757' },
      { name: 'Spider-Man', id: 'id:2319' },
      { name: '火影忍者', id: 'id:78174' },
      { name: '简约', id: 'id:2278' },
      { name: '日漫', id: 'id:1' },
      { name: '动漫', id: 'id:5' },
      { name: '风景', id: 'id:711' },
    ];
  },

  // 获取图片列表
  async getPhotos(params) {
    const {page,size,query} = params
    const resJson = await fetch(
      `https://api.codelife.cc/wallpaper/wallhaven?page=${page}&size=${size}&q=${query}&lang=zh`
    );
    const res = await resJson.json();
    const listFormat = res.data.map((item) => {
      return {
        ...item,
        unofficial: true, // 非官方 api 壁纸
        coverimage: item.thumb,
        image: item.raw,
      };
    });

    return listFormat
  }
};
