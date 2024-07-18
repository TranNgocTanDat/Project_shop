
export interface ProductItem {
  id: number;
  name: string;
  price: number;
  cover: string;
  discount: number;
  fileGmae: string;
  infor: string;
  Category: string;
  [key: string]: any; // Các thuộc tính khác nếu có

}

export interface CartItem extends ProductItem {
  
  qty: number;
}

export interface SlideCardData extends ProductItem{
  title: string;
  
}


const productItems: ProductItem[] = [
  {
    id: 49,
    discount: 50,
    cover: "/images/gameOff/gameoff-2.png",
    name: "Goose goose Duck",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Đến lúc trở thành một con Ngỗng Ngu Nghịch! Đắm mình vào các môi trường đa dạng/môi trường không ngừng mở rộng của Vũ trụ Chim trong Goose Goose Duck. Một trò chơi đòi hỏi kỹ năng phân tích xã hội, nơi bạn và những người bạn ngỗng phải cùng nhau hoàn thành nhiệm vụ. Hãy cẩn thận với những con Ngan độc ác và những con Gà hoang, đã xâm nhập vào đội của bạn và sẽ làm bất cứ điều gì để ngăn bạn!",
    Category: ""
  },
  {
    id: 50,
    discount: 40,
    cover: "/images/gameOff/gameoff-4.png",
    name: "solitaired",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Solitaire, còn được gọi là Card Solitaire hoặc Patience, là trò chơi bài một người chơi phổ biến nhất trên thế giới. Nếu bạn thích Solitaire cổ điển, bạn sẽ thích trò chơi solitaire sắc nét và rõ ràng này!",
    Category: ""
  },
  {
    id: 51,
    discount: 40,
    cover: "/images/gameOff/gameoff-9.png",
    name: "Temple Run",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Bạn đã đánh cắp tượng thần bị nguyền rủa từ một ngôi đền. Bây giờ, bạn phải tìm cách chạy thoát khỏi những con Khỉ Ác Quỷ lúc nào cũng bám sát đằng sau bạn để sống sót. Hãy kiểm tra khả năng phản xạ của bạn khi chạy dọc theo những bức tường cổ của ngôi đền và những vách đá dốc. Trượt để quẹo, nhảy và trượt để tránh chướng ngại vật, thu thập xu và mua bùa tăng lực, mở khóa nhân vật mới",
    Category: ""
  },
  {
    id: 52,
    discount: 40,
    cover: "/images/gameOff/gameoff-8.png",
    name: "Angry birds",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Những chú heo con xấu tính không thể sánh được với súng cao su của bạn trong Angry Birds Friends! Nắm vững nghệ thuật bắn súng cao su và hướng tới vinh quang 3 sao trong trò chơi Angry Birds cổ điển luôn mới mẻ!",
    Category: ""
  },
  {
    id: 53,
    discount: 50,
    cover: "/images/gameOff/gameoff-7.png",
    name: "Tom",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Tom Biết Nói Của Tôi (My Talking Tom) là trò chơi mà sẽ biến mỗi ngày thành một cuộc phiêu lưu thú vị.\n" +
        "\n" +
        "Người chơi nhận nuôi thú cưng ảo này, giúp Tom luôn vui vẻ và giúp Tom khám phá thế giới của mình.\n" +
        "\n" +
        "- Tom Biết Nói là chú mèo thực sự biết nói chuyện\n" +
        "- Thu thập các vật phẩm thời trang và nội thất",
    Category: ""
  },
  {
    id: 54,
    discount: 50,
    cover: "/images/gameOff/gameoff-10.png",
    name: "Brain Out",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Các câu hỏi vô cùng hại não với những lời giải cực sốc\n" +
        "Game thách thức đầy vui nhộn và làm xáo trộn trí tưởng tượng của bạn\n" +
        "Sự kết hợp thử thách hoàn hảo giữa IQ và tư duy logic, phản xạ, trí nhớ và khả năng sáng tạo\n" +
        "Muốn qua cửa? Phải quá vỡ quy tắc! Không có cách nào là không thể qua cửa, chỉ có những đáp án mà bạn không nghĩ ra được\n" +
        "Vô số các cửa với những điều kỳ quặc chắc chắn sẽ đem đến cho bạn những niềm vui bất tận!",
    Category: ""
  },
];

const productOffs: ProductItem[] = [
  {
    id: 1,
    discount: 0,
    cover: "/images/gameOff/gameoff-1.png",
    name: "Đào vàng",
    price: 100,
    fileGmae: "/images/fileGame/game2.docx",
    infor: "Trở thành ông trùm mỏ vàng trong trò chơi siêu kinh điển Đào Vàng 2023\n" +
        "Nhận ngay thật nhiều vàng và kim cương to lớn. Vượt qua 1001+ màn chơi gây cấn. Đào vàng 2023\n" +
        "Gold mining games - Trò chơi kinh điển Đào vàng 2023 có mặt tại Mobile. Trở thành tay game đào vàng cừ khôi",
    Category: "Game Offline"
  },
  {
    id: 2,
    discount: 50,
    cover: "/images/gameOff/gameoff-2.png",
    name: "Goose goose Duck",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Đến lúc trở thành một con Ngỗng Ngu Nghịch! Đắm mình vào các môi trường đa dạng/môi trường không ngừng mở rộng của Vũ trụ Chim trong Goose Goose Duck. Một trò chơi đòi hỏi kỹ năng phân tích xã hội, nơi bạn và những người bạn ngỗng phải cùng nhau hoàn thành nhiệm vụ. Hãy cẩn thận với những con Ngan độc ác và những con Gà hoang, đã xâm nhập vào đội của bạn và sẽ làm bất cứ điều gì để ngăn bạn!",
    Category: "Game Offline"
  },
  {
    id: 3,
    discount: 40,
    cover: "/images/gameOff/gameoff-3.png",
    name: "Subway surfers",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Ghép, nổ và trang trí với các nhân vật yêu thích của bạn từ vũ trụ Subway Surfers! Giải các câu đố và khám phá những điều kỳ diệu mới mỗi ngày.",
    Category: "Game Offline"
  },
  {
    id: 4,
    discount: 40,
    cover: "/images/gameOff/gameoff-4.png",
    name: "solitaired",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Solitaire, còn được gọi là Card Solitaire hoặc Patience, là trò chơi bài một người chơi phổ biến nhất trên thế giới. Nếu bạn thích Solitaire cổ điển, bạn sẽ thích trò chơi solitaire sắc nét và rõ ràng này!",
    Category: "Game Offline"
  },
  {
    id: 5,
    discount: 50,
    cover: "/images/gameOff/gameoff-5.png",
    name: "Plants vs zombies",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Chơi cuộc phiêu lưu chiến lược hành động ăn khách, nơi bạn gặp gỡ, chào đón và đánh bại quân đoàn thây ma vui nhộn từ bình minh cho đến cuối ngày. Tích lũy một đội quân thực vật tuyệt vời, nạp đầy chúng với Plant Food và đưa ra kế hoạch tối ưu để bảo vệ bộ não của bạn.\n",
    Category: "Game Offline"
  },
  {
    id: 6,
    discount: 0,
    cover: "/images/gameOff/gameoff-6.png",
    name: "Candy crush saga",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Trở thành cao thủ giải đố xếp chuỗi 3 huyền thoại trong tựa game đến từ King! Với hơn một nghìn tỷ màn xếp kẹo đã được chơi, Candy Crush Saga là tựa game giải đố xếp chuỗi 3 vô cùng nổi tiếng.",
    Category: "Game Offline"
  },
  {
    id: 7,
    discount: 50,
    cover: "/images/gameOff/gameoff-7.png",
    name: "Tom",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Tom Biết Nói Của Tôi (My Talking Tom) là trò chơi mà sẽ biến mỗi ngày thành một cuộc phiêu lưu thú vị.\n" +
        "\n" +
        "Người chơi nhận nuôi thú cưng ảo này, giúp Tom luôn vui vẻ và giúp Tom khám phá thế giới của mình.\n" +
        "\n" +
        "- Tom Biết Nói là chú mèo thực sự biết nói chuyện\n" +
        "- Thu thập các vật phẩm thời trang và nội thất",
    Category: "Game Offline"
  },
  {
    id: 8,
    discount: 40,
    cover: "/images/gameOff/gameoff-8.png",
    name: "Angry birds",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Những chú heo con xấu tính không thể sánh được với súng cao su của bạn trong Angry Birds Friends! Nắm vững nghệ thuật bắn súng cao su và hướng tới vinh quang 3 sao trong trò chơi Angry Birds cổ điển luôn mới mẻ!",
    Category: "Game Offline"
  },
  {
    id: 9,
    discount: 40,
    cover: "/images/gameOff/gameoff-9.png",
    name: "Temple Run",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Bạn đã đánh cắp tượng thần bị nguyền rủa từ một ngôi đền. Bây giờ, bạn phải tìm cách chạy thoát khỏi những con Khỉ Ác Quỷ lúc nào cũng bám sát đằng sau bạn để sống sót. Hãy kiểm tra khả năng phản xạ của bạn khi chạy dọc theo những bức tường cổ của ngôi đền và những vách đá dốc. Trượt để quẹo, nhảy và trượt để tránh chướng ngại vật, thu thập xu và mua bùa tăng lực, mở khóa nhân vật mới",
    Category: "Game Offline"
  },
  {
    id: 10,
    discount: 50,
    cover: "/images/gameOff/gameoff-10.png",
    name: "Brain Out",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Các câu hỏi vô cùng hại não với những lời giải cực sốc\n" +
        "Game thách thức đầy vui nhộn và làm xáo trộn trí tưởng tượng của bạn\n" +
        "Sự kết hợp thử thách hoàn hảo giữa IQ và tư duy logic, phản xạ, trí nhớ và khả năng sáng tạo\n" +
        "Muốn qua cửa? Phải quá vỡ quy tắc! Không có cách nào là không thể qua cửa, chỉ có những đáp án mà bạn không nghĩ ra được\n" +
        "Vô số các cửa với những điều kỳ quặc chắc chắn sẽ đem đến cho bạn những niềm vui bất tận!\n",
    Category: "Game Offline"
  },
  {
    id: 11,
    discount: 50,
    cover: "/images/gameOff/gameoff-11.png",
    name: "Minecraft",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Minecraft là một trò chơi được làm từ các khối mà bạn có thể biến đổi thành bất cứ thứ gì bạn có thể tưởng tượng. Chơi ở chế độ Sáng tạo với tài nguyên không giới hạn hoặc tìm kiếm các công cụ để chống lại nguy hiểm ở chế độ Sinh tồn. Với lối chơi đa nền tảng liền mạch trên Minecraft: Bedrock Edition, bạn có thể phiêu lưu một mình hoặc cùng bạn bè, đồng thời khám phá một thế giới vô tận, được tạo ngẫu nhiên với đầy các khối để khai thác, các quần xã sinh vật để khám phá và mob để kết bạn (hoặc chiến đấu). Sự lựa chọn là của bạn trong Minecraft – vì vậy hãy chơi theo cách của bạn!",
    Category: "Game Offline"
  },
  {
    id: 12,
    discount: 50,
    cover: "/images/gameOff/gameoff_12.png",
    name: "Zombie Tsunami",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Tấn công thành phố bằng binh đoàn zombie. Biến người đi bộ thành zombie và tạo dựng binh đoàn lớn nhất.\n" +
        "Ăn thịt bạn bè và rượt đuổi thách thức họ bằng cách phá hủy tất cả mọi thứ trên đường đi.",
    Category: "Game Offline"
  },
  {
    id: 71,
    discount: 50,
    cover: "/images/gameOff/gameoff-13.png",
    name: "Chặt Heo",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Tham gia thế giới vui nhộn ở làng ỦN ỈN Chặt Heo với các giải đấu của lối chơi Tiến Lên Miền Nam để tìm ra được ĐỖ THÁNH vô địch xưng bá thiên hạ trong vô số các anh tài sống khắp mọi miền Tổ Quốc.",
    Category: "Game Offline"
  },
  {
    id: 72,
    discount: 50,
    cover: "/images/gameOff/gameoff-14.png",
    name: "Bắn Gà",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Game bắn gà kinh điển trên điện thoại\n" +
        "Binh đoàn gà xâm lược đã tấn công và tiêu diệt toàn bộ các hành tinh trong vũ trụ. Bọn chúng đang tiến về trái đất, tấn công trái đất thân yêu của chúng ta. Các bạn hãy mau chóng chơi ngay phiên bản game bắn gà để giúp những siêu nhân địa cầu chống lại bọn gà tàn ác này.  ",
    Category: "Game Offline"
  },
  {
    id: 73,
    discount: 50,
    cover: "/images/gameOff/gameoff-15.png",
    name: "Helix Jump",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Helix Jump là trò chơi arcade 3D đỉnh cao sẽ khiến bạn không thể ngồi yên! Đập, va đập và nảy theo cách của bạn thông qua các bệ xoắn ốc xoay tròn để đi đến cuối cùng. Nhưng được cảnh báo, nó không dễ dàng như nó có vẻ!",
    Category: "Game Offline"
  },
  {
    id: 74,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-16.png",
    name: "Minion Rush",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Đã đến lúc thử sức với sự hoang dã với những chú Minion cực kỳ vui nhộn và vô cùng táo bạo!\n" +
        "\n" +
        "Illumination, Universal và Gameloft mang đến cho bạn Minion Rush, một trò chơi chạy bất tận có thể chơi ngoại tuyến, bất cứ lúc nào! Chạy qua rất nhiều địa điểm thú vị, né tránh những cái bẫy quanh co, chiến đấu với những kẻ xấu xa hèn hạ và thu thập vô số Chuối đẹp đẽ, tươi sáng!"
  },
  {
    id: 75,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-17.png",
    name: "Shadow Fight 2",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Phần tiếp theo của cú hit Facebook nổi tiếng với 40 triệu người dùng\n" +
        "\n" +
        "Shadow Fight 2 là sự kết hợp ăn ý giữa RPG và Chiến đấu cổ điển. Trò chơi này cho phép bạn trang bị cho nhân vật của mình vô số vũ khí sát thương và bộ áo giáp quý hiếm, đồng thời có hàng tá kỹ thuật Võ thuật hoạt hình sống động như thật! Đè bẹp kẻ thù của bạn, làm nhục những tên trùm quỷ và là người đóng Cổng Bóng tối. Bạn có những gì cần thiết để đá, đấm, nhảy và chém theo cách của bạn để chiến thắng? Chỉ có một cách để tìm ra."
  },
  {
    id: 76,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-18.png",
    name: "Hay Day",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Chào mừng đến với Hay Day. Xây dựng nông trại, chăn nuôi gia súc gia cầm, khám phá Thung lũng, làm nông, trang trí và tạo ra vùng đất thiên đường của riêng bạn."
  },
  {
    id: 77,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-19.png",
    name: "Tangle Rope 3D",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Bạn đang tìm cách để thư giãn và rèn luyện trí óc trong thời gian rảnh rỗi? Không cần tìm đâu xa ngoài Tangle Rope 3D: Trò chơi giải đố Untwist Knots.\n" +
        "Với trò chơi giải đố Tangle Rope 3D: Untwist Knots, bạn sẽ bước vào cuộc phiêu lưu giải đố 3D."
  },
  {
    id: 78,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-20.png",
    name: "Crossy Road",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Tại sao con gà băng qua đường?\n" +
        "Tại sao Bồ câu lại để ĐÓ ở đó?\n" +
        "Tại sao Unihorse lại ăn hết số kẹo đó?"
  },
  {
    id: 79,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-21.png",
    name: "Fishdom – VTC Game",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "VTC Game và Playrix đồng phát hành trò chơi Fishdom tại Việt Nam.\n" +
        "\n" +
        "Bạn chưa từng chơi Fishdom bao giờ? Hãy hít thở thật sâu và đắm mình vào thế giới dưới nước đầy thú vị với trò chơi ghép hình 3 cùng Fishdom, một trò chơi miễn phí hoàn toàn mới!"
  },
  {
    id: 80,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-22.png",
    name: "Dream League Soccer 2024",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Dream League Soccer 2024 đưa bạn vào trung tâm của trận đấu bóng đá với giao diện mới mẻ và các tính năng hoàn toàn mới! Thu thập đội bóng trong mơ của bạn từ hơn 4.100 cầu thủ bóng đá được cấp phép FIFPRO ™ và ra sân thi đấu với các câu lạc bộ bóng đá hay nhất thế giới! Vượt qua 8 hạng đấu trong khi thưởng thức toàn bộ chuyển động của người chơi được ghi lại bằng chuyển động 3D, bình luận sâu sắc trong trò chơi, tùy chỉnh đội và nhiều hơn thế nữa. Trò chơi đẹp chưa bao giờ hay đến thế!"
  },
  {
    id: 81,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-23.png",
    name: "Asphalt 8",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Là một phần trong nhượng quyền thương mại Asphalt của Gameloft, Asphalt 8 cung cấp một bộ sưu tập phong phú gồm hơn 300 ô tô và xe máy được cấp phép, mang đến những cuộc đua đầy hành động trên hơn 75 đường đua. Đắm chìm trong thế giới ly kỳ của cuộc đua tốc độ cao khi bạn ngồi vào ghế lái."
  },
  {
    id: 82,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-24.png",
    name: "Cover Fire",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Nhiệm vụ của bạn là dẫn đầu trận chiến và trở thành người bắn súng và bắn tỉa giỏi nhất.\n" +
        "Tải xuống miễn phí ngay bây giờ một trong những trò chơi bắn súng ngoại tuyến hay nhất trên điện thoại di động"
  },
  {
    id: 83,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-25.png",
    name: "Township – VTC Game",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "VTC Game và Playrix đồng phát hành trò chơi Township tại Việt Nam.\n" +
        "\n" +
        "Township là sự kết hợp độc đáo giữa xây dựng thành phố và nông trại!"
  },
  {
    id: 84,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-26.png",
    name: "Dead Target",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Hơn 130 triệu người chơi đang phải đối đầu với thử thách sống còn trong game bắn súng khủng nhất hiện nay, bạn còn chờ gì mà không tham gia bắn zombie và trở thành người giỏi nhất!"
  },
  {
    id: 85,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-27.png",
    name: "Ramboat - Offline Action Game",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Ramboat - Trò chơi hành động bắn súng Chơi miễn phí và ngoại tuyến. Giúp Mambo và nhóm ưu tú của anh ấy trong nhiệm vụ bất khả thi này. Vượt qua tất cả các thử thách, nâng cấp súng của bạn, lái xe nhanh và đánh bại kẻ thù của bạn trên một trong những trò chơi ngoại tuyến hay nhất. Hãy là một chiến binh và tham gia vào quân đội trong cuộc chạy đua và súng đầy thử thách này, cảm nhận adrenaline trong chế độ sinh tồn này, một trò chơi vô tận. Nhảy và bắn trong trò chơi ngoại tuyến này, một trong những trò chơi bắn súng hay nhất."
  },
  {
    id: 86,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-28.png",
    name: "Angela Biết Nói Của Tôi",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Angela Biết Nói là một thú cưng ảo siêu vui nhộn luôn nóng lòng được nhảy múa và hát ca theo cách của mình để vươn tới đỉnh cao."
  },
  {
    id: 87,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-29.png",
    name: "Piano Fire 2",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Yêu âm nhạc và muốn thể hiện cảm giác nhịp nhàng của mình? Còn chờ gì nữa, hãy thử \"Piano Fire 2\" - trò chơi mới dành cho những người yêu âm nhạc! Đó là một cuộc phiêu lưu đầy thú vị qua nhiều thể loại âm nhạc khác nhau, khai thác theo nhạc rock, pop, cổ điển và jazz. Bạn sẽ bắt kịp nhịp điệu và rèn luyện phản xạ của mình ngay lập tức!"
  },
  {
    id: 88,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-30.png",
    name: "Royal Match",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Chào mừng bạn đến với Royal Match, vua của các trò chơi giải đố! Vuốt màu, giải các câu đố ghép 3 và giúp Vua Robert trang trí lâu đài của mình. Một cuộc phiêu lưu thú vị đang gọi bạn!"
  },
  {
    id: 89,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-31.png",
    name: "Alto's Adventure",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Tham gia Alto và bạn bè của mình khi họ bắt tay vào một cuộc phiêu lưu trượt tuyết vô tận. Hành trình trên đồi núi cao đẹp của vùng hoang dã bản địa của họ, thông qua các làng lân cận, rừng cổ, và tàn tích lâu bị bỏ rơi."
  },
  {
    id: 90,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-32.png",
    name: "Pokémon",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Một trò chơi giải đố hoàn toàn mới, nơi bạn giải các câu đố để chiến đấu với Pokémon"
  },
];


const productOns:ProductItem[] = [
  {
    id: 13,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-2.png",
    name: "Goose goose Duck",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Đến lúc trở thành một con Ngỗng Ngu Nghịch! Đắm mình vào các môi trường đa dạng/môi trường không ngừng mở rộng của Vũ trụ Chim trong Goose Goose Duck. Một trò chơi đòi hỏi kỹ năng phân tích xã hội, nơi bạn và những người bạn ngỗng phải cùng nhau hoàn thành nhiệm vụ. Hãy cẩn thận với những con Ngan độc ác và những con Gà hoang, đã xâm nhập vào đội của bạn và sẽ làm bất cứ điều gì để ngăn bạn!"
  },
  {
    id: 14,
    discount: 40,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-1.png",
    name: "PUBG",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Rất nhiều sự kiện để bạn khám phá. Leo lên đỉnh cao trong PUBG MOBILE và bắn theo ý muốn. PUBG MOBILE là trò chơi battle royale nguyên gốc trên thiết bị di động và là một trong những trò chơi bắn súng di động hay nhất"
  },
  {
    id: 15,
    discount: 40,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-3.png",
    name: "CROSS FIRE",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Game bắn súng góc nhìn thứ nhất Free to Play, trong game có hai lực lượng là Black List (BL) và Global Risk (GR) giao tranh với nhau trong một cuộc chiến có quy mô toàn cầu."
  },
  {
    id: 16,
    discount: 40,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-4.png",
    name: "League of Legends",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Mỗi trận đấu của Liên Minh Huyền Thoại đều được chia làm 2 đội chiến đấu với nhau theo cơ chế PvP,[b] mỗi đội sẽ gồm có 5 người chơi bảo vệ một nửa bản đồ và tấn công một nửa còn lại. Người chơi trong trận đấu sẽ điều khiển một nhân vật, được gọi là \"tướng\", với những kỹ năng độc đáo và phong cách chơi độc nhất."
  },
  {
    id: 17,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-5.png",
    name: "GTA-5",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Khi một kẻ lừa đảo trẻ tuổi, một tên cướp ngân hàng đã nghỉ hưu và một kẻ tâm thần đáng sợ thấy mình bị vướng vào một số thành phần đáng sợ và điên loạn nhất của thế giới tội phạm ngầm, chính phủ Hoa Kỳ và ngành công nghiệp giải trí, họ phải thực hiện một loạt vụ trộm nguy hiểm để sinh tồn trong một thành phố tàn nhẫn mà họ không thể tin tưởng bất kỳ ai — càng không thể tin tưởng lẫn nhau."
  },
  {
    id: 18,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-6.png",
    name: "Zing Speed",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Game đua xe có lối chơi vô cùng đơn giản. Chỉ cần sử dụng các phím mũi tên và các phím chức năng như Drift and N2O. Trong chế độ chơi Tốc độ, mỗi khi drift bạn sẽ tích được một lượng N2O, khi đầy thanh N2O bạn sẽ nhận được đạo cụ để tăng tốc độ."
  },
  {
    id: 19,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-7.png",
    name: "Audision",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Audition là game được phát triển bởi tập đoàn T3 Entertainment và ra mắt giới game thủ vào năm 2004 tại Hàn Quốc"
  },
  {
    id: 20,
    discount: 40,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-8.png",
    name: "Võ Lâm",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: " một trò chơi nhập vai trực tuyến nhiều người chơi (MMORPG) được Việt hóa từ trò chơi Kiếm hiệp tình duyên Onlinecủa công ty Kingsoft (Kim Sơn) từ Trung Quốc và được VNG phân phối tại Việt Nam."
  },
  {
    id: 21,
    discount: 40,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-9.png",
    name: "MU",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Mu là một thể loại game nhập vai (RPG). Game Mu cùng lúc có thể chơi nhiều người. Mục đích của người chơi là luyện con \"hero\" (Charater) của mình mạnh lên để có thể đánh mọi quái vật trong game và có thể kill nhau. Level tối đa con Hero của bạn còn tuỳ theo server đó quy định. Do đó người mạnh nhất là người mạnh nhất là người có số điểm cao nhất. (Reset nhiều lần nhất, Mu Hàn Thì không có chuyện này vì LV lên cực chậm)."
  },
  {
    id: 22,
    discount: 40,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-10.png",
    name: "Avata Star",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Avatar Star Online là game bắn súng kinh điển hay chính là phiên bản hồi sinh của tựa game FPS Avatar Star. Game Avatar Star Online mang phong cách chibi dễ thương với những hình ảnh vô cùng quen thuộc. Tải game Avatar Star Online để bắt đầu tham gia cuộc chiến bắn súng vừa mới lạ vừa quen thuộc này."
  },
  {
    id: 23,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-11.png",
    name: "Chiến Cơ Huyền Thoại",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Nếu bạn là FAN của các trò chơi cổ điển như bắn gà, bắn ruồi và bắn máy bay thì đây là một trò chơi bạn không thể bỏ qua.\n" +
        "Hệ mặt trời của chúng ta đang bị những kẻ thù xâm chiếm, bạn là niềm hi vọng cuối cùng của chúng tôi. Nhiệm vụ của bạn là điều khiển những siêu chiến cơ tham gia vào các trận chiến để bảo vệ hệ mặt trời. Hãy tiêu diệt và phá vỡ mọi kế hoạch của kẻ thù."
  },
  {
    id: 24,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-12.png",
    name: "Quyền Vương",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Quyền Vương Chiến là tựa game dàn trận chiến thuật cực kỳ hấp dẫn. Trò chơi là sự kết hợp của những cái tên nổi tiếng như The King of Fighters, Samurai Shodown và The Last Blade. Người chơi sẽ bắt gặp những cái tên quen thuộc cùng đồng hành chiến đấu vì mục tiêu trở thành những đấu sĩ mạnh mẽ nhất. "
  },
  {
    id: 91,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-13.png",
    name: "Among Us",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "- VAI TRÒ MỚI: Theo dõi. Đặt thiết bị theo dõi lên bất kỳ ai và xem liệu mọi người có thực sự ở nơi họ nói không.\n" +
        "- VAI TRÒ MỚI: Người tạo tiếng ồn. Khi bị giết, phát ra cảnh báo cho mọi người. Cái chết của bạn có thể phơi bày sự thật!\n" +
        "- VAI TRÒ MỚI: Bóng ma: Tàng hình và trốn thoát sau khi giết người.\n" +
        "- Cài đặt sảnh được cải tiến: Danh sách cài đặt khổng lồ đã được thay đổi thành một menu mới sạch sẽ để xem khi tham gia sảnh\n" +
        "- Nhạc sảnh được thêm vào Dropship"
  },
  {
    id: 92,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-14.png",
    name: "Coin Master",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Hãy tận hưởng thế giới vui vẻ, hồi hộp và phần thưởng lớn ngay trong tầm tay bạn. Hãy đảm bảo trò chơi của bạn được cập nhật để bạn thực sự có thể trải nghiệm tất cả những gì có trong đó."
  },
  {
    id: 93,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-15.png",
    name: "Lords Mobile",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "．Thêm cảnh báo bệnh viện nhàn rỗi\n" +
        "．Thêm tùy chọn tự động đóng cửa sổ xếp hàng cho cả [Hàng Đợi Lãnh Địa] và [Hàng Đợi Quân Đội]\n" +
        "．Thêm nút [Cài đặt ( Nút Bánh Răng)] mới ở trên cùng bên phải của cửa sổ xếp hàng"
  },
  {
    id: 94,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-16.png",
    name: "CLASH OF CLANS",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Vào Đấu trường! Xây dựng Bộ bài Chiến đấu của bạn và chiến thắng kẻ thù trong các trận chiến thời gian thực nhanh chóng. Từ những người sáng tạo CLASH OF CLANS, một trò chơi chiến đấu nhiều người chơi trong thời gian thực với sự tham gia của các nhân vật Clash yêu thích của bạn và hơn thế nữa. Bắt đầu chiến đấu với những người chơi từ khắp nơi trên thế giới!"
  },
  {
    id: 95,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-17.png",
    name: "Chuyến đi Mario Kart",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Bạn có thể chạy đua với tối đa bảy người chơi khác, cho dù họ đã đăng ký làm bạn bè trong trò chơi, ở gần đó hoặc rải rác trên khắp thế giới."
  },
  {
    id: 96,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-18.png",
    name: "Genshin Impact",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Lục địa Teyvat rộng lớn, nơi vô số sinh vật sinh sôi và hội tụ.\n" +
        "Đây chính là thế giới do bảy vị Thần thống trị, cũng là nơi bảy loại nguyên tố tụ hội"
  },
  {
    id: 97,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-19.png",
    name: "Honkai Impact",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "v7.5 Crusade of Chasing Shadows được phát hành! Tham gia vào các sự kiện đăng nhập để nhận được tùy chọn vết thánh A Forged Light, Thẻ cung cấp thiết bị x12, v.v."
  },
  {
    id: 98,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-20.png",
    name: "Honkai: Star Rail",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "\"Honkai: Star Rail\" là tựa game RPG Vũ Trụ Kỳ Ảo mới nhất được HoYoverse phát triển.\n" +
        "Trong sản phẩm này, người chơi sẽ bước lên Đội Tàu Astral, trải nghiệm những kỳ quan ảo diệu rực rỡ xuyên suốt dải ngân hà, mạo hiểm và kịch tính là tiết tấu chính xuyên suốt cuộc hành trình."
  },
  {
    id: 99,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-21.png",
    name: "Epic Seven",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Và thế là Thế giới thứ 7 bắt đầu...\n" +
        "Diche, Nữ thần Sự sống, đã triệu hồi toàn bộ sức mạnh đang suy yếu của mình\n" +
        "và một lần nữa tạo hình cho những Người bảo vệ và Người thừa kế Giao ước.\n" +
        "“Hỡi các con, ta giao phó thế giới này cho các con.”"
  },
  {
    id: 100,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-22.png",
    name: "Chrono Travelers",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Chơi ngay để tận hưởng vô số phần thưởng độc quyền bao gồm nguyên liệu quý hiếm, trang phục và Tinh linh!”"
  },
  {
    id: 101,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-23.png",
    name: "Gaia Odyssey",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "[Gaia Odyssey] là một game nhập vai hành động 3D mang đến cho bạn sứ mệnh cứu cả một vương quốc."
  },
  {
    id: 102,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-24.png",
    name: "Legacy Fate",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Trò chơi nhập vai nhàn rỗi hấp dẫn nhất năm 2024! Hãy đăng ký trước để nhận HẠN CHẾ Phần thưởng độc quyền! Đừng bỏ lỡ - Đăng ký trước NGAY BÂY GIỜ để nhận được Quà tặng hấp dẫn!"
  },
  {
    id: 103,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-25.png",
    name: "Tamashi",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Tamashi: Rise of Yokai là MMOARPG 3D theo phong cách anime, nơi bạn có thể vượt qua con đường và chiến đấu sát cánh với tất cả các loại yokai và linh hồn hộ mệnh được gọi là Tamashi."
  },
  {
    id: 104,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-26.png",
    name: "Epic Conquest",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Một trò chơi tuyệt vời được tạo ra bởi tình yêu và niềm đam mê cháy bỏng của một nhóm nhỏ gồm 2 người. Sau 3 năm phát triển, trò chơi này cuối cùng đã sẵn sàng để được mọi người thưởng thức!"
  },
  {
    id: 105,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-27.png",
    name: "Swordash",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Con người sẽ không bao giờ quên ngày hôm đó - khi một vật chất kỳ dị đột ngột xuất hiện trên bầu trời, kéo theo đó là sự đột biến tập thể của loài người mà không có dấu hiệu báo trước."
  },
  {
    id: 106,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-28.png",
    name: "20 Minutes Till Dawn",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Sống sót qua những đợt tấn công dữ dội của vô số quái vật trong 20 phút!"
  },
  {
    id: 107,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-29.png",
    name: "Legend of Survivors",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Bóng tối đã bao trùm thế giới, và anh hùng của chúng ta phải tìm cách sống sót trước lũ thế lực tà ác và trở thành người sống sót cuối cùng. Tham gia vào các trận chiến hoành tráng trong game nhập vai hành động 3D Roguelike, trang bị các trang bị mạnh mẽ và tạo ra vô số sự kết hợp của các công trình độc đáo để trở nên mạnh hơn kẻ thù của bạn."
  },
  {
    id: 108,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-30.png",
    name: "Hero Survival IO",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Trái đất năm 2201, các nhà phát minh lỗi lạc nhất của tổ chức Skynet đã cho ra đời cỗ máy có thể di chuyển xuyên không thời gian.\n" +
        "Nhân vật chính của chúng ta, Yasuo, mang trong mình sứ mệnh thực hiện chuyến du hành này. Tuy nhiên, một vụ nổ lớn đã xảy ra, và Yasuo, lạc trong dòng thời gian, đến với một nơi xa lạ, nơi những con quái vật nguy hiểm luôn chực chờ, sinh tồn lúc này là mục tiêu tối thượng."
  },
  {
    id: 109,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-31.png",
    name: "Magica.io",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Đã đến lúc trở thành nhà vô địch!\n" +
        "Magica.io là trò chơi Đấu trường sinh tồn trên điện thoại di động dành cho những nhà lãnh đạo thực thụ! Hãy đánh bại những người chơi khác trên đấu trường và chinh phục các bảng xếp hạng!"
  },
  {
    id: 110,
    discount: 50,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-32.png",
    name: "Ronin",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Kỷ nguyên chiến tranh ở Nhật Bản, nơi cái chết và sự phản bội luôn rình rập. Một người sống sót đơn độc - một chiến binh bị ruồng bỏ - đã không thể cứu lãnh chúa của mình. Không còn nơi nào để đi và không còn gì để mất, samurai đó nắm chặt chuôi kiếm và lên đường báo thù."
  },
];

const productPlays:ProductItem[] = [
  {
    id: 25,
    discount: 50,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-1.png",
    name: "FIFA 4",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "FIFA Online 4 là một trò chơi bóng đá trực tuyến nhiều người chơi miễn phí được phát triển bởi EA Spearhead và được phát hành bởi Garena tại Việt Nam."
  },
  {
    id: 26,
    discount: 40,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-2.png",
    name: "Super Mario",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Rất ít trò chơi điện tử có thể khẳng định được sự khác biệt về ý thức chung trong nhiều thập kỷ, với sự trải dài qua các thế hệ khác nhau. Super Mario là một trong số những trò chơi, nếu không muốn nói là trò chơi duy nhất, đã đạt được những bước tiến lớn trong lĩnh vực này."
  },
  {
    id: 27,
    discount: 40,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-3.png",
    name: "Hollow Knight",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Nếu bạn làm một người yêu thích những tựa game hành động - nhập vai góc nhìn ngang cổ điển, thì Hollow Knight sẽ là một sự lựa chọn cực kỳ tuyệt vời mà bạn không nên bỏ qua. Lối chơi hấp dẫn, đồ hoạ tuyệt đẹp cùng những trận chiến với hiệu ứng kỹ năng hoành tráng, tựa game này chắc chắn sẽ mang đến cho bạn những trải nghiệm đầy thú vị."
  },
  {
    id: 28,
    discount: 40,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-4.png",
    name: "Devil May Cry 5",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Là phần thứ 5 của loạt game Devil May Cry đình đám, Devil May Cry 5 tiếp tục đưa người chơi theo bước những chiến binh anh hùng trên hành hình truy tìm và ngăn chặn âm mưu huỷ diệt thế giới của tên quỷ vương Urizen. Cùng mình tìm hiểu những nét thú vị của tựa game trong bài viết sau đây nhé!"
  },
  {
    id: 29,
    discount: 50,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-5.png",
    name: "Nioh",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Nếu bạn là một fan của tựa game chiến đấu đối kháng và muốn tìm một tựa game bắt bạn phải chiến đấu với kẻ thù mạnh hơn mình rất nhiều lần, liên tục bón hành cho bạn, không cho bạn phút giây nghỉ ngơi nào thì không thể bỏ qua Nioh. Bài viết này sẽ giúp bạn tổng hợp những thông tin về Nioh nhé!"
  },
  {
    id: 30,
    discount: 50,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-6.png",
    name: "Cuphead",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Chắc hẳn đã không ít lần bạn nghe đến những bộ phim hoạt hình như Mickey Mouse hay Thuỷ thủ Popeye và cả Cuphead. Đó đều là những bộ phim hoạt hình đình đám đã đi vào kí ức của rất nhiều người thế hệ 8x, 9x. Nhưng nay, những kí ức ấy đã một lần nữa được sống lại thông qua tựa game hành động, phiêu lưu với cái tên Cuphead."
  },{
    id: 31,
    discount: 50,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-7.png",
    name: "Sonic & Sega All-Stars Racing",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Sonic & All-Stars Racing Transformed là game đua xe biến hình độc đáo cùng Sonic và các ngôi sao. Sonic & All-Stars Racing Transformed phát hành trên Steam và hỗ trợ cả những dòng máy tính cấu hình thấp."
  },
  {
    id: 32,
    discount: 40,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-8.png",
    name: "Đấu Trường Thú 3",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Đã có mặt trên thị trường 20 năm, với rất nhiều tên gọi khác nhau: Bloody Roar, Đấu Trường Thú, đấu trường đẫm máu, đấu võ thú. Là một loạt các trò chơi chiến đấu với thể thức đối kháng theo từ màn chơi được sản xuất bởi công công ty Hudson, Hoa Kỳ và sau đó được KONAMI của Nhật Bản phát triển."
  },
  {
    id: 33,
    discount: 40,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-9.png",
    name: "Disney Universe",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Disney Universe là một trò chơi phiên bản thử nghiệm chỉ có sẵn cho Windows, thuộc thể loại 'Trò chơi' và danh mục phụ 'Phiêu lưu', và được tạo ra bởi Disney."
  },
  {
    id: 34,
    discount: 40,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-10.png",
    name: "Renegade Ops",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Trong Renegade Ops, bạn phải đánh bại Inferno, một kẻ điên có ý định thống trị toàn cầu. Tiêu diệt kẻ thù trong một loạt các môi trường tuyệt đẹp bằng cách sử dụng nhiều loại phương tiện khác nhau. Người chơi có lựa chọn chiến đấu một mình trong chế độ chơi đơn, lập nhóm ngoại tuyến với màn hình chia đôi hai người chơi hoặc tham gia trải nghiệm co-op trực tuyến 4 người chơi năng động. Vượt qua các chiến tuyến của kẻ thù bằng cách làm việc cùng nhau hoặc cạnh tranh để giành thành tích khi bạn và bạn bè của bạn hướng tới mục tiêu đứng đầu bảng lãnh đạo trực tuyến."
  },
  {
    id: 35,
    discount: 50,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-11.png",
    name: "Deathspank Trilogy",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Nhắc đến những tựa game kinh dị nổi tiếng toàn thế giới không thể không kể đến series Dead Space. Đây là một dòng game có tuổi đời rất lâu trong thể loại kinh dị sinh tồn hứa hẹn sẽ mang đến cho các game thủ những cung bậc cảm xúc đặc biệt. Nào hãy cùng nhau tìm hiểu phần đầu tiên của serie game này nhé!"
  },
  {
    id: 36,
    discount: 50,
    Category: "Game Playstation",
    cover: "/images/gamePlay/gameplay-12.png",
    name: "Naruto Shippuden Ninja Storm 3",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Đắm mình vào tựa game theo đúng nguyên tác bộ truyện tranh Naruto huyền thoại. Naruto Shippuden Ultimate Ninja Storm Revolution theo phong cách đối kháng, các trận đấu trong game có nhịp độ nhanh, dồn dập đầy kịch tính với những chuyển biến bất ngờ."

  },
];

const productSteams: ProductItem[] = [
  {
    id: 37,
    discount: 50,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-1.png",
    name: "APEX",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Apex Legends là tựa game Battle Royale được ra mắt vào năm 2019, do Respawn phát triển. Tựa game này lấy bối cảnh vũ trụ từ Titanfall - một tựa game bắn súng đầy kịch tính, gay cấn và hấp dẫn."
  },
  {
    id: 38,
    discount: 40,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-2.png",
    name: "Back 4 Blood",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Kế thừa những tinh hoa từ dòng game Left 4 Dead đình đám, Back 4 Blood tiếp tục dẫn bước người chơi trên hành trình chiến đấu, sinh tồn giữa đại dịch xác sống đang hoành hành, tàn phá nhiều khu vực trên toàn thế giới."
  },
  {
    id: 39,
    discount: 40,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-3.png",
    name: "MUCK",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Nếu bạn yêu thích những tựa game đơn giản, mang yếu tố sinh tồn, khám phá cũng như đề cao tính sáng tạo thì chắc chắn Muck là một sự lựa chọn vô cùng tuyệt vời mà bạn không nên bỏ qua."
  },
  {
    id: 40,
    discount: 40,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-4.png",
    name: "PALADINS",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Paladins là một tựa game bắn súng ở góc nhìn thứ nhất. Đây là một trò chơi trực tuyến được đánh giá là khá tương đồng với Overwatch, điều đặc biệt là tựa game này hoàn toàn miễn phí. Hãy cùng mình khám phá xem Paladins có những gì điểm hấp dẫn nhé?"
  },
  {
    id: 41,
    discount: 50,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-5.png",
    name: "UNDERLORDS",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Dota Underlords là một trong số ít các tựa game chiến thuật chất lượng có thể chơi được trên máy tính lẫn điện thoại. Chưa kể, mỗi mùa game đều có những phiên bản khác nhau tạo nên sự mới lạ và hấp dẫn. Hãy cùng tìm hiểu thêm về Dota Underlords nào!"
  },
  {
    id: 42,
    discount: 50,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-6.png",
    name: "SEA OF THIEVES",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Căng buồm ra khơi và trải nghiệm cảm giác hoá thân thành tên cướp biển thực thụ là những trải nghiệm mà tựa game Sea of Thieves mang lại cho người chơi. Những yếu tố độc đáo và thú vị trong cuộc hành trình đều đang chờ đợi người chơi khám phá."
  },
  {
    id: 43,
    discount: 50,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-7.png",
    name: "BRAWHALLA",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Sau thành công của những phiên bản Brawlhalla trên hệ máy PlayStation 4, Xbox và PC. Thì mới đây nhà phát hành Ubisoft đã tiếp tục đưa Brawlhalla tiến vào một sân chơi hoàn toàn mới khi cho ra mắt phiên bản Brawlhalla Mobile, một phiên bản dành cho các thiết bị di động. Hãy cùng bài viết điểm qua những nét đặc sắc của trò chơi này nhé!"
  },
  {
    id: 44,
    discount: 40,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-8.png",
    name: "REALM ROYALE",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Realm Royale là một tựa game hành động Battle Royale cực kỳ độc đáo. Pha lẫn yếu tố cổ điển và hiện đại, 90 người chơi sẽ cùng chiến đấu vì một mục tiêu cao nhất để trở thành những kẻ sống sót cuối cùng trên bản đồ. Cùng bài viết sau đây tìm hiểu chi tiết hơn những tính năng thú vị mà Realm Royale mang đến cho người chơi nhé!"
  },
  {
    id: 45,
    discount: 40,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-9.png",
    name: "BUSINESS TOUR",
    price: 50,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Nếu là một người yêu thích những trò chơi board game, đặc biệt là Cờ Tỷ Phú thì bạn không nên bỏ qua Business Tour. Gameplay đơn giản cùng thiết kế đầy ngộ nghĩnh, trò chơi chắc chắn mang đến cho bạn những trải nghiệm đầy thú vị. "
  },
  {
    id: 46,
    discount: 40,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-10.png",
    name: "COUNTER STRIKE",
    price: 200,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Nhắc đến Counter Strike có lẽ chẳng còn gì xa lạ với những game thủ có niềm đam mê hoặc yêu thích thể loại FPS (Bắn súng góc nhìn thứ nhất). Tựa game đã từng phá đảo cộng đồng khiến nhiều game thủ quên ăn quên ngủ và in đậm trong tuổi thơ của biết bao thế hệ giờ đây đã xuất hiện bản trên web. Hãy cùng bài viết để khám phá xem cách chơi Counter Strike (CS 1.6) trên máy tính không cần tải nhé!"
  },
  {
    id: 47,
    discount: 50,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-11.png",
    name: "JUST ACT NATUPAL",
    price: 20,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Just Act Natural là một game thuộc thể loại co-op game được ra mắt vào giữa năm 2021 bởi nhà phát hành Conor Garity và nhanh chóng được nhiều người yêu thích vì các tính năng thú vị, sự sáng tạo trong đồ họa cũng như giá cả phải chăng. Hôm nay chúng ta sẽ cùng khám phá game này."
  },
  {
    id: 48,
    discount: 50,
    Category: "Game Steams",
    cover: "/images/gameSteam/gamesteam-12.png",
    name: "Cry of Fear",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Kể từ khi ra mắt, Layers of Fear đã ghi dấu ấn trong lòng đông đảo người chơi với cách thể hiện những nét nghệ thuật kinh dị thông qua các tác phẩm hội hoạ. Tuy vậy, tựa game này cũng là một cách để bạn luyện nhịp tim của mình đấy, vì những hiện tượng tâm linh có thể xuất hiện bất cứ lúc nào. Hãy cùng mình điểm qua đôi nét nổi bật của game nhé."
  },
];

const productSlide: ProductItem[] = [
  {
    id: 55,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-11.png",
    name: "Minecraft",
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Minecraft là một trò chơi được làm từ các khối mà bạn có thể biến đổi thành bất cứ thứ gì bạn có thể tưởng tượng. Chơi ở chế độ Sáng tạo với tài nguyên không giới hạn hoặc tìm kiếm các công cụ để chống lại nguy hiểm ở chế độ Sinh tồn. Với lối chơi đa nền tảng liền mạch trên Minecraft: Bedrock Edition, bạn có thể phiêu lưu một mình hoặc cùng bạn bè, đồng thời khám phá một thế giới vô tận, được tạo ngẫu nhiên với đầy các khối để khai thác, các quần xã sinh vật để khám phá và mob để kết bạn (hoặc chiến đấu). Sự lựa chọn là của bạn trong Minecraft – vì vậy hãy chơi theo cách của bạn! ",
    price: 100,
  },
  {
    id: 56,
    discount: 40,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-1.png",
    name: "PUBG",
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Rất nhiều sự kiện để bạn khám phá. Leo lên đỉnh cao trong PUBG MOBILE và bắn theo ý muốn. PUBG MOBILE là trò chơi battle royale nguyên gốc trên thiết bị di động và là một trong những trò chơi bắn súng di động hay nhất ",
    price: 50,
  },
  {
    id: 57,
    discount: 40,
    Category: "Game Online",
    cover: "/images/gameOn/gameon-3.png",
    name: "CROSS FIRE",
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Game bắn súng góc nhìn thứ nhất Free to Play, trong game có hai lực lượng là Black List (BL) và Global Risk (GR) giao tranh với nhau trong một cuộc chiến có quy mô toàn cầu.",
    price: 50,
  },
  {
    id: 58,
    discount: 50,
    Category: "Game Offline",
    cover: "/images/gameOff/gameoff-2.png",
    name: "Goose goose Duck",
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Đến lúc trở thành một con Ngỗng Ngu Nghịch! Đắm mình vào các môi trường đa dạng/môi trường không ngừng mở rộng của Vũ trụ Chim trong Goose Goose Duck. Một trò chơi đòi hỏi kỹ năng phân tích xã hội, nơi bạn và những người bạn ngỗng phải cùng nhau hoàn thành nhiệm vụ. Hãy cẩn thận với những con Ngan độc ác và những con Gà hoang, đã xâm nhập vào đội của bạn và sẽ làm bất cứ điều gì để ngăn bạn!",
    price: 20,
  }
];


const slide: SlideCardData[] = 
  productSlide.map(product => ({
    ...product,
    title: "Giảm 50% cho lần thực hiện giao dịch đầu tiên", // Đặt qty mặc định là 1
  }));

const productMobile: ProductItem[] = [
  {
    id: 59,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-1.png",
    name: "Liên Quân",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Arena of Valor, do Level Infinite và TiMi Studio Group mang đến cho bạn, là trải nghiệm MOBA 5v5 thời gian thực đỉnh cao! Tham gia cùng bạn bè của bạn, tạo một bang hội và làm chủ hơn 100 anh hùng độc đáo từ các nhượng quyền thương mại được đánh giá cao trên toàn thế giới. Tương lai của MOBA trên di động đã đến. Bạn đã sẵn sàng để trở thành một huyền thoại?"
  },
  {
    id: 60,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-2.png",
    name: "Free Fire",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "[Sinh Tồn] Cổng Trời Mini xuất hiện trên bầu trời! Đến đó để chiến đấu và giành lấy những vũ khí ngày xưa siêu bá đạo.\n" +
        "[Tử Chiến] Một số vòng đấu sẽ được chuyển sang Cổng Trời Mini.\n" +
        "[Tử Chiến - Góc Nhìn Thứ Nhất] Chế độ Tử Chiến đặc biệt đã ra mắt, trải nghiệm ngay nào!\n" +
        "[Đua Xe Bắn Súng] Cập nhật Chiến Cơ, phương tiện mới với khả năng bay lượn!\n" +
        "[Nhân vật mới - Kassie] Kỹ năng kết nối với đồng đội và liên tục hồi máu cho họ.\n" +
        "[Kho Vũ Khí] Ra mắt Xưởng Vũ Khí và cập nhật hiển thị chỉ số vũ khí"
  },
  {
    id: 61,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-3.png",
    name: "Tốc Chiến",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Hãy hòa mình vào Tốc Chiến: trải nghiệm MOBA 5 đấu 5 thuần kỹ năng và chiến thuật trong Liên Minh Huyền Thoại của Riot Games, nay được tái xây dựng hoàn toàn dành cho thiết bị di động. Với hệ thống điều khiển trơn tru và lối chơi siêu tốc, bạn có thể lập đội cùng bạn bè, khóa chọn tướng của bạn và thực hiện các pha xử lý để đời."
  },
  {
    id: 62,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-4.png",
    name: "Mobile Legends",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Hãy cùng bạn bè tham gia Mobile Legends: Bang Bang, siêu phẩm MOBA 5v5 hoàn toàn mới, để tranh tài với những người chơi khác từ khắp nơi trên thế giới! Lựa chọn vị tướng mà bạn yêu thích để cùng đồng đội kiến tạo một đội hình tuyệt vời! Ghép đội trong 10 giây, tranh đấu trong 10 phút. Từ đi đường, đi rừng cho đến phá trụ và giao tranh, tất cả những thú vui từ các tựa game MOBA trên PC lẫn game hành động khác giờ đã nằm gọn trong lòng bàn tay! Hãy cho mọi người thấy tinh thần eSports đầy nhiệt huyết của bạn đi nào!"
  },
  {
    id: 63,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-5.png",
    name: "TFT",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Hãy thử thách khả năng xây dựng đội hình của bạn với Đấu Trường Chân Lý, trò chơi PvP chiến thuật giao tranh tự động nhiều người chơi từ studio đã tạo ra Liên Minh Huyền Thoại."
  },
  {
    id: 64,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-6.png",
    name: "8 Ball Pool",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Hãy chơi với bạn bè! Chơi cùng các huyền thoại. Chơi game Miniclip 8 Ball Pool cực đỉnh trên di động và trở thành cơ thủ giỏi nhất!"
  },
  {
    id: 65,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-7.png",
    name: "Roblox",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Hãy bắt đầu từ những trò chơi đơn giãn nhất với Roblox."
  },
  {
    id: 66,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-8.png",
    name: "Piano",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Chơi Piano Fire trên điện thoại di động ở mọi nơi ngay hôm nay!\n" +
        "\n" +
        "Piano Fire là một trò chơi đặc biệt trong các thể loại trò chơi piano khác nhau và lối chơi tuyệt vời. Kết hợp giữa piano và nhạc EDM một cách hoàn hảo, bạn có thể cảm nhận được sự va chạm của băng và lửa, nghiện những bài hát nổi tiếng trên khắp thế giới!"
  },
  {
    id: 67,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-9.png",
    name: "Hungry Shark",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Cá mập đã trở lại trong phần tiếp theo lớn hơn và dữ dội hơn của Hungry Shark Evolution!***\n" +
        "Điều khiển một con cá mập trong cơn điên cuồng ăn thịt và ăn hết mọi thứ trên khắp các đại dương, từ cá và chim nhỏ đến cá voi ngon lành và cả những con người vô tình!"
  },
  {
    id: 68,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-10.png",
    name: "Zing Play",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "ZingPlay - Vương quốc game thú vị và hấp dẫn, là cổng game giải trí đa nền tảng hàng đầu tại Việt Nam! Phát triển bởi ZingPlay Game Studios thuộc VNG, ZingPlay mang đến những trải nghiệm game chất lượng, những giây phút vui vẻ, giải trí và thách thức trí tuệ không thể bỏ qua."
  },
  {
    id: 69,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-11.png",
    name: "Rise of Kingdoms",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Hy Lạp xuất binh, vươn tới đỉnh cao\n" +
        "▶ Rise of Kingdoms giới thiệu nền văn minh mới: Hy Lạp! ◀\n" +
        "Hy Lạp đã tham gia đấu trường Rise of Kingdoms. Cái nôi của nền văn minh phương Tây, quê hương của những triết gia, chiến binh và nhà thơ huyền thoại, sức mạnh của thế giới Hy Lạp bây giờ nằm trong tay ngài:\n" +
        "NGƯỜI HY LẠP – Dũng cảm, sâu sắc, nghệ sĩ và sáng tạo, người Hy Lạp cổ đại nổi tiếng nhờ những kỳ quan kiến trúc kỳ vĩ như điện thờ Parthenon, cũng như vai trò tiên phong của họ trong chính trị, nghệ thuật, triết học và chiến tranh. Ngài sẽ lợi dụng núi tài nguyên và trí"
  },
  {
    id: 70,
    discount: 50,
    Category: "Game Mobile",
    cover: "/images/gameMobile/gamemobile-12.png",
    name: "Hơi Thở Mặt Trời",
    price: 100,
    fileGmae: "/images/fileGame/game1.docx",
    infor: "Giải phóng Sát thủ quỷ bên trong bạn!\n" +
        "\n" +
        "Hãy sẵn sàng cho một cuộc phiêu lưu hoành tráng trong thế giới của Shadow Demon Slayer! Trò chơi đầy hành động này là sự kết hợp tuyệt vời giữa nhập vai và chiến đấu, đưa bạn vào một cuộc hành trình ly kỳ với những trải nghiệm đáng kinh ngạc."
  },
];

// Chuyển đổi ProductItem thành CartItem
const cartItems: CartItem[] = productItems.map(product => ({
  ...product,
  qty: 1, // Đặt qty mặc định là 1
}));


export { productItems, productOffs, productOns, productPlays, productSteams,productMobile, productSlide, cartItems, slide};


