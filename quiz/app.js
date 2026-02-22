// IX Personality Types
const TYPES = {
    T: { id: 'T', name: '管理（思考型）', color: '#4a9eff', icon: '青', traits: ['論理的', '責任感', '整理好き', 'データ重視'], desc: '情報を収集・分析し、論理的に考えることが得意です。計画性があり、整理整頓を好みます。正確さと時間管理を重視し、事実に基づいた判断を大切にします。' },
    PE: { id: 'PE', name: '志向（信念型）', color: '#9b59b6', icon: '紫', traits: ['献身的', '観察力', '良心的', '価値重視'], desc: '高い理想と強い信念を持ち、自分の価値観に基づいて行動します。意見をはっきり述べ、献身的に目標に向かいます。信頼と誠実さを何より大切にします。' },
    H: { id: 'H', name: '調和（協調型）', color: '#ff8c42', icon: '橙', traits: ['思いやり', '繊細', '温かい', '関係重視'], desc: '人の気持ちに敏感で、温かい心を持っています。調和を大切にし、周囲の人々を思いやります。無条件の愛情と包容力で人間関係を築きます。' },
    I: { id: 'I', name: '空想（想像型）', color: '#8B6914', icon: '茶', traits: ['想像力', '内省的', '穏やか', '思索重視'], desc: '豊かな内面世界を持ち、一人の時間を大切にします。静かで穏やかな性格で、深い思索にふけることを好みます。自分のペースで物事を進めることを望みます。' },
    PR: { id: 'PR', name: '実現（行動型）', color: '#e74c3c', icon: '赤', traits: ['適応力', '説得力', '魅力的', '行動重視'], desc: 'チャレンジ精神旺盛で、行動力があります。チャンスを見つけて即座に動き、人を引きつけるカリスマ性を持っています。刺激的な環境で力を発揮します。' },
    R: { id: 'R', name: '自由（反応型）', color: '#f1c40f', icon: '黄', traits: ['自発的', '創造的', '遊び心', '反応重視'], desc: '楽しいことが大好きで、ユニークな発想力を持っています。遊び心があり、周囲を明るくします。自由な環境で創造性を発揮し、今この瞬間を大切にします。' }
};

// 45 Questions - each option maps to a type
const QUESTIONS = [
    {
        q: '私が自分の性格で最も大事に思っているところは、', opts: [
            { label: 'A', text: '人と情報の交換をし、それをきちんと分類・整理できるところ。', type: 'T' },
            { label: 'B', text: '時と場合、状況に応じて、独自の豊かな発想力で人生に楽しみを見出すところ。', type: 'R' },
            { label: 'C', text: 'ごく限られた人にしか見せることはない。', type: 'I' },
            { label: 'D', text: '繊細で、人の気持ちを思いやることが出来るところ。', type: 'H' },
            { label: 'E', text: '高い理想とモラルを持ち、それを追求するところ。', type: 'PE' },
            { label: 'F', text: '要領よく、自分のことは自分で何でもこなすところ。', type: 'PR' }
        ]
    },
    {
        q: '私が「友達にしたい」と思う人は、', opts: [
            { label: 'A', text: '私の信念や意見を尊重してくれる人。', type: 'PE' },
            { label: 'B', text: '刺激的な、大人の遊びが好きな人。', type: 'PR' },
            { label: 'C', text: 'お互いの関心のある事柄について、情報や考えを活発に交換し合える人。', type: 'T' },
            { label: 'D', text: '「自分流の」スタイルを持った、面白くて楽しい人。', type: 'R' },
            { label: 'E', text: '温かい心の持ち主で、包容力のある人。', type: 'H' },
            { label: 'F', text: '私の個人的な時間・空間を尊重してくれる人。', type: 'I' }
        ]
    },
    {
        q: '私の好む環境（仕事場・書斎・部屋など）は、', opts: [
            { label: 'A', text: 'やわらかい素材や色を使った温かみのある「安らぎの場」。香や花のいい匂いがし、お気に入りの家具や音楽のある居心地のいい部屋。', type: 'H' },
            { label: 'B', text: '整理整頓された機能的な部屋。物は所定の場所にきちんと置いてあり、表彰状や認定証が釣り合いよく飾られている。', type: 'T' },
            { label: 'C', text: '自分のこだわりが反映されている部屋。伝統や文化、格調を感じさせ、洗練された雰囲気がある。', type: 'PE' },
            { label: 'D', text: '私が楽しむ場所。ポスター、みんなで楽しめるゲーム、私の好きなもののコレクションなどがある部屋。', type: 'R' },
            { label: 'E', text: '分厚いじゅうたんや派手な装飾の家具のあるゴージャスな部屋。赤や黒などの鮮やかな色調が好き。', type: 'PR' },
            { label: 'F', text: '働いたり生活したりするだけの場。私にとって環境は重要でなく、飾り気も必要ない。世間の目から離れて自分の世界を持つことができさえすればよい。', type: 'I' }
        ]
    },
    {
        q: '人と大喧嘩した時、私がよく経験するのは、', opts: [
            { label: 'A', text: '相手が私の意見をどうしても受け入れない、と思い込む。', type: 'PE' },
            { label: 'B', text: '「今に見ている。思い知らせてやる」と怒る。', type: 'PR' },
            { label: 'C', text: '傷つき、拒絶されたと感じる。', type: 'H' },
            { label: 'D', text: '相手の頭の悪さにいら立つ。', type: 'T' },
            { label: 'E', text: '「誰がお前なんか必要とするか」と切り離す。', type: 'R' },
            { label: 'F', text: '自分の世界に引きこもり、一人になる。', type: 'I' }
        ]
    },
    {
        q: '私にとって理想的な人は、', opts: [
            { label: 'A', text: '私と一緒に、気の向くまま、遊び心にあふれた楽しいことをするのが好きな人。', type: 'R' },
            { label: 'B', text: '私の勤勉さ、責任感の強さ、計画性のある時間の使い方を認めてくれる人。', type: 'T' },
            { label: 'C', text: '私の意見を尊重し、私の言っていることや価値観を信じてくれる人。', type: 'PE' },
            { label: 'D', text: '私だけの居場所や世界に入って来ず、私のペースに任せてくれる人。', type: 'I' },
            { label: 'E', text: '温かくて思いやりがあり、私のことや私の気持ちを気にかけてくれる人。', type: 'H' },
            { label: 'F', text: '競争や勝負事、刺激的なことが好きで、私のリードについてこられる人。', type: 'PR' }
        ]
    },
    {
        q: '事態がうまくいかない時、私は', opts: [
            { label: 'A', text: '最初は傷つくが、あとで復讐心を抱く。', type: 'H' },
            { label: 'B', text: '一人になってふさぎ込み、感情を表に出さない。', type: 'I' },
            { label: 'C', text: '「愛されていない」「拒絶されている」と感じる。', type: 'H' },
            { label: 'D', text: '自分の説にしがみつき、意見を譲らない。', type: 'PE' },
            { label: 'E', text: '他人を理詰めで言い負かす。', type: 'T' },
            { label: 'F', text: '自分の都合のいいように物事や人を操ろうとする。', type: 'PR' }
        ]
    },
    {
        q: '私が好むのは、', opts: [
            { label: 'A', text: 'エキサイティングなこと。', type: 'PR' },
            { label: 'B', text: '温かい人間関係を築くこと。', type: 'H' },
            { label: 'C', text: '頭を使って考えること。', type: 'T' },
            { label: 'D', text: '価値のあること。', type: 'PE' },
            { label: 'E', text: '一人で落ち着いて過ごせること。', type: 'I' },
            { label: 'F', text: '面白くて楽しいこと。', type: 'R' }
        ]
    },
    {
        q: '子供の頃、私は', opts: [
            { label: 'A', text: '一番上の子か一人っ子、もしくは一人っ子同然に扱われた。いわゆる「しっかりした子」でいなければならなかった。', type: 'T' },
            { label: 'B', text: '恥ずかしがり屋で引きこもりがちだった。想像力を使って空想に浸っていることが多かった。', type: 'I' },
            { label: 'C', text: '家族と一緒にいることが幸せだった。周りの人から愛され守られることに喜びを感じた。', type: 'H' },
            { label: 'D', text: '親から強い信念と判断力を教わった。誠実さ、モラルの大切さを知った。', type: 'PE' },
            { label: 'E', text: '好きなことには夢中になったが、飽きっぽかった。動物や昆虫と戯れたり、自分で遊びを考え出したりするなど、楽しいことをするのが大好きだった。', type: 'R' },
            { label: 'F', text: '家族の絆が薄い家庭で育ち、自分のことは大抵自分でやってのけた。勝ち負けを競うような遊び（戦争ごっこ・チャンバラなど）が好きで、幼少の頃から一匹狼タイプだった。', type: 'PR' }
        ]
    },
    {
        q: '私の能力の中でよく発揮していると思えるのは、', opts: [
            { label: 'A', text: '人の心配をしたり、思いやったり、世話を焼いたりするところ。', type: 'H' },
            { label: 'B', text: '明確に思考し、論理的であるところ。', type: 'T' },
            { label: 'C', text: '自分の意見・信念・価値観に基づいて物事を判断したり評価したりするところ。', type: 'PE' },
            { label: 'D', text: '自分の想いにふけり、豊かな想像力を働かせるところ。', type: 'I' },
            { label: 'E', text: '楽しく、遊び心にあふれ、とても活発であるところ。', type: 'R' },
            { label: 'F', text: '逆境から抜け出す要領を知っているところ。強硬な面もあるが、人を惹きつける面もある。', type: 'PR' }
        ]
    },
    {
        q: '（精神的に）気分が良くない時、私の状態に最も近いのは、', opts: [
            { label: 'A', text: '「人に嫌な思いをさせて、私は何てダメなのだろう。」', type: 'H' },
            { label: 'B', text: '「他人になんか任せておけない。私がやってしまおう。」', type: 'T' },
            { label: 'C', text: '「モラルや信念のないような人間は危険だ。」', type: 'PE' },
            { label: 'D', text: '「私はいつも取り残されている・・・。」', type: 'I' },
            { label: 'E', text: '「悪いのは私じゃない。あいつのせいだ。」', type: 'R' },
            { label: 'F', text: '「世の中には負け組がいる。そんなやつらは私の知ったことじゃない。」', type: 'PR' }
        ]
    },
    {
        q: '時として私は、', opts: [
            { label: 'A', text: '頑張ってやろうとして、かえって事態を余計にややこしくしてしまう。', type: 'T' },
            { label: 'B', text: '自分のことは自分で始末をつけろと思い、人に手を貸さない。', type: 'PR' },
            { label: 'C', text: 'みんなに良く思われようと八方美人になる。', type: 'H' },
            { label: 'D', text: '他人に対し、完璧であることを要求する。', type: 'PE' },
            { label: 'E', text: '自分の殻に閉じこもる。', type: 'I' },
            { label: 'F', text: 'もっと力を発揮しようとして自分の仕事を増やす。', type: 'R' }
        ]
    },
    {
        q: '相手に自分の好意を認めてもらうために、私なら、', opts: [
            { label: 'A', text: '相手の「一人の世界」や「一人の時間・空間」を大切にする。', type: 'I' },
            { label: 'B', text: '相手と一緒に遊んだり楽しいことをしたりする。', type: 'R' },
            { label: 'C', text: '何か「大きな」ことやエキサイティングなことを、一緒にやらないかと持ちかける。', type: 'PR' },
            { label: 'D', text: '愛情と思いやりを持って、親しみやすい存在でいる。', type: 'H' },
            { label: 'E', text: 'よく考え、段取りをきっちりし、一所懸命仕事をする。', type: 'T' },
            { label: 'F', text: '筋の通った価値観を示し、誠実で献身的な態度をとる。', type: 'PE' }
        ]
    },
    {
        q: '一般的に私が好むのは、', opts: [
            { label: 'A', text: '想像力を使って一人で空想にふけること。エネルギーを使う必要のないことをする方が好きである。', type: 'I' },
            { label: 'B', text: '友達と一緒にいたり、自分の好きなことをしたりして、とにかく楽しむこと。たとえ他人が理解してくれなくても気にしない。', type: 'R' },
            { label: 'C', text: '今日を精一杯生きること。一匹狼のような生き方をし、自分のことは自分でやってのける。', type: 'PR' },
            { label: 'D', text: '人と共にいること。みんなから必要とされ、受け入れられ、大切な存在だと思われていると感じたい。', type: 'H' },
            { label: 'E', text: '一人で考えたり計画したりすること。あるいは誰かもう一人と、思考を刺激するような知的なことを話し合うこと。', type: 'T' },
            { label: 'F', text: '一人で深く思索したりビジョンを描いたりすること。あるいは誰かもう一人と、政治・宗教・時事問題などについて意見を交換し、議論すること。', type: 'PE' }
        ]
    },
    {
        q: '私の長所となっている能力は、', opts: [
            { label: 'A', text: '情報を入手して分析し、問題を解決する能力。', type: 'T' },
            { label: 'B', text: '遊び心を持って、楽しみながら、何かを独自に創り上げる能力。', type: 'R' },
            { label: 'C', text: '人をいつくしみ思いやる能力。', type: 'H' },
            { label: 'D', text: '他の人が退屈するような単純な仕事を黙々とこなす能力。', type: 'I' },
            { label: 'E', text: '順応性があって、すばやく行動を起こす能力。', type: 'PR' },
            { label: 'F', text: 'たとえ抑圧されても自分の信じることを守り抜く能力。', type: 'PE' }
        ]
    },
    {
        q: '友人が私を批判するとしたら、次のようなところである。', opts: [
            { label: 'A', text: '感傷的すぎる。', type: 'H' },
            { label: 'B', text: '自由奔放すぎる。', type: 'R' },
            { label: 'C', text: '仕事中心的すぎる。', type: 'T' },
            { label: 'D', text: 'やたらと人を自分の都合のいいように操る。', type: 'PR' },
            { label: 'E', text: '信念に頑固すぎる。', type: 'PE' },
            { label: 'F', text: '内気すぎる。', type: 'I' }
        ]
    },
    {
        q: '私が関わりたいと望む仕事（活動）は、', opts: [
            { label: 'A', text: '既存の枠組みにとらわれず、創造力を発揮して新しいものを作り出していく仕事。', type: 'R' },
            { label: 'B', text: '刺激的（ハイリスク・ハイリターン）で、短期間で結果の出る仕事。', type: 'PR' },
            { label: 'C', text: '仲の良い人たちと、和やかな雰囲気でする仕事。', type: 'H' },
            { label: 'D', text: 'プロジェクトを組織したりまとめたりする仕事。', type: 'T' },
            { label: 'E', text: '粘り強さの要求される、重要なプロジェクトを任されるような仕事。', type: 'PE' },
            { label: 'F', text: '指示を受けながら、一人で黙々とする仕事。', type: 'I' }
        ]
    },
    {
        q: '時として私は、', opts: [
            { label: 'A', text: '一人になれる自分だけの場所を求める。', type: 'I' },
            { label: 'B', text: '日常の単調なことやルーティーンに飽き、刺激が欲しくなる。', type: 'PR' },
            { label: 'C', text: 'もっと多くの責任を引き受け、それを達成したいと思う。', type: 'T' },
            { label: 'D', text: '人に愛情や思いやりを注ぎ、自分も注がれたいと思う。', type: 'H' },
            { label: 'E', text: 'スリルや一攫千金を求める。', type: 'R' },
            { label: 'F', text: '使命感に燃え、自分の信念を人に訴えたいと思う。', type: 'PE' }
        ]
    },
    {
        q: '私は時々次のような状態に陥る。', opts: [
            { label: 'A', text: 'まるで一人の世界にいるかのように引きこもり、自分の殻に閉じこもる。', type: 'I' },
            { label: 'B', text: '人から認められようと、人を過剰に喜ばせようとする。人の頼みを断ったり、自分を優先させたりすることがなかなか出来ない。', type: 'H' },
            { label: 'C', text: '他人の手を焼かせ、やたらと怒られる。「物事を完璧にこなしたり、決まりごとをきっちり守ったりするなんて、わずらわしくてやってられない」と思う。', type: 'R' },
            { label: 'D', text: '「ミスをしないようにしよう」「人から正当に理解されるために完璧でありたい」と自分に大きなプレッシャーをかける。時にやたら理屈をこね、自己弁護をする。', type: 'T' },
            { label: 'E', text: '自分のことが一番大事。「他人は二の次で、自分の邪魔にならないようにいてほしい」と思う。', type: 'PR' },
            { label: 'F', text: '強固な意見や確信があり、「説教してでも人に自分と同じ信念を持たせる使命がある」と思う。', type: 'PE' }
        ]
    },
    {
        q: '私が共感できる言い回しは、', opts: [
            { label: 'A', text: '「自分の信念を貫け」', type: 'PE' },
            { label: 'B', text: '「自分流のやり方でやれ」', type: 'R' },
            { label: 'C', text: '「なるなら一番」', type: 'PR' },
            { label: 'D', text: '「受けるより与えること」', type: 'H' },
            { label: 'E', text: '「仕事第一、遊びは二の次」', type: 'T' },
            { label: 'F', text: '「波風立てるな」', type: 'I' }
        ]
    },
    {
        q: '友人が私を動物にたとえるとしたら、', opts: [
            { label: 'A', text: '亀', type: 'I' },
            { label: 'B', text: '母鳥', type: 'H' },
            { label: 'C', text: '猫', type: 'R' },
            { label: 'D', text: '働きバチ', type: 'T' },
            { label: 'E', text: 'ふくろう', type: 'PE' },
            { label: 'F', text: 'きつね', type: 'PR' }
        ]
    },
    {
        q: '私が最後まで守りたいと思うものは、', opts: [
            { label: 'A', text: '信念', type: 'PE' },
            { label: 'B', text: '優しい心', type: 'H' },
            { label: 'C', text: '論理的思考力', type: 'T' },
            { label: 'D', text: '適応力', type: 'PR' },
            { label: 'E', text: '一人でいる時間', type: 'I' },
            { label: 'F', text: 'ユーモア', type: 'R' }
        ]
    },
    {
        q: '私が時々あこがれるのは、', opts: [
            { label: 'A', text: '競争心や冒険心をかき立てられるような新しいプロジェクトや「ビッグチャンス」が突然降って沸いてくること。', type: 'PR' },
            { label: 'B', text: '自分を投げ打ってとことん追求するだけの価値のあるものを持つこと。', type: 'PE' },
            { label: 'C', text: '自分の思いにふけることのできる静かな場所と時間があること。', type: 'I' },
            { label: 'D', text: 'もっと親密で互いに分かり合える人間関係を持つこと。', type: 'H' },
            { label: 'E', text: '本来の自分に帰り、好きな時に好きなことをする自由が得られること。', type: 'R' },
            { label: 'F', text: 'もっと多くの情報や、思考力を使って挑戦できる課題が与えられること。', type: 'T' }
        ]
    },
    {
        q: '過去において、大切にしていた人間関係が不幸な結末を迎えた時、私は', opts: [
            { label: 'A', text: '相手を喜ばせようとだけ思った。しかし、与えれば与えるほど相手から受けるものは少なくなり、最後には、拒絶され、愛されない存在だと感じた。', type: 'H' },
            { label: 'B', text: 'とにかく楽しくしようと頑張ったが、そうすればするほど相手からヒンシュクを買った。拒絶され無視されたことに対し傷つき、そして怒りを覚えた。', type: 'R' },
            { label: 'C', text: '一所懸命に働き、自分の責任を果たしたにも関わらず認められなかった。さらに自分のエネルギーと時間を奪われ、よくイライラしてかんしゃくを起こした。', type: 'T' },
            { label: 'D', text: '「人生の指針となるような目標や信念を持つこと」「それに献身することの大事さ」を説得できなかった。相手に自分の信念を押し付けていることもあった。', type: 'PE' },
            { label: 'E', text: '自分の内にあるものを相手に表現できなかった。親友とでさえ活発な会話がなかなかできず、相手が自分に近づけば近づくほど自分は内に閉じこもるようになった。', type: 'I' },
            { label: 'F', text: '「今が、これ以上自分が損をしないうちに相手と縁を切る潮時だ」と思い、自分は自分で勝手にやっていこうと決めた。', type: 'PR' }
        ]
    },
    {
        q: '時々、ふと気がつくと私は', opts: [
            { label: 'A', text: '人に非難され、拒絶感を抱いている。', type: 'H' },
            { label: 'B', text: '人の粗探しをしたり、自分の意見を押し付けたりしている。', type: 'PE' },
            { label: 'C', text: '事実に目を向けない人にイライラして言葉を荒げている。', type: 'T' },
            { label: 'D', text: '自分勝手な言動で、私に注意を向けさせようとしている。', type: 'R' },
            { label: 'E', text: '心を閉ざし引きこもっている。', type: 'I' },
            { label: 'F', text: '人を互いに反発させ、口論や争いを起こしている場を見てほくそえんでいる。', type: 'PR' }
        ]
    },
    {
        q: '追い詰められた状況になった場合、私は', opts: [
            { label: 'A', text: '取り残された感じを受け、何が起こったのかと戸惑う。', type: 'I' },
            { label: 'B', text: '自分のような信念や理想を持っていない者に我慢できず、どんどん見捨てる。', type: 'PE' },
            { label: 'C', text: '仕返しをしてやりたいと思い、「今に思い知らせてやる」と復讐的になる。', type: 'PR' },
            { label: 'D', text: '人が私を責めるのは、私が悪いのではなく、人が勝手に非難したり拒絶したりしているだけだ、と自分の解釈を作り上げる。', type: 'H' },
            { label: 'E', text: '人から拒絶されていると感じ、なぜ好かれないのかと絶望的になる。', type: 'R' },
            { label: 'F', text: '愚かなことをする人を批判し、「なぜ頭を使って考えられないのか」と腹を立てる。', type: 'T' }
        ]
    },
    {
        q: '小・中学生の頃、私は多分　　　　　　だと思われていた。', opts: [
            { label: 'A', text: '意見屋', type: 'PE' },
            { label: 'B', text: '情報屋', type: 'T' },
            { label: 'C', text: 'いい人', type: 'H' },
            { label: 'D', text: 'お調子者', type: 'R' },
            { label: 'E', text: '空想家', type: 'I' },
            { label: 'F', text: '取引上手', type: 'PR' }
        ]
    },
    {
        q: '私にとって、人生の成功を得る秘訣は、', opts: [
            { label: 'A', text: '気の向くままにワクワクする楽しみを持つこと。独創的な自分でいること。', type: 'R' },
            { label: 'B', text: '強い信念と価値観を持つこと。人生に使命感を持ち、それを貫くこと。', type: 'PE' },
            { label: 'C', text: '人からあまり注目を浴びず、また、流れに逆らわずに淡々と日々を過ごすこと。', type: 'I' },
            { label: 'D', text: 'どんどん挑戦し、行動を起こすこと。リスクを取るのを恐れないこと。', type: 'PR' },
            { label: 'E', text: '論理的に、明確に物事を考えること。一所懸命に仕事をすること。', type: 'T' },
            { label: 'F', text: '情け深く、思いやりを持つこと。誰にでも愛情を持って接すること。', type: 'H' }
        ]
    },
    {
        q: '精神的なことが原因で体に痛みを感じるとしたら、私なら　　　　　　に感じると思う。', opts: [
            { label: 'A', text: '胸', type: 'H' },
            { label: 'B', text: '背中', type: 'PE' },
            { label: 'C', text: '首と肩', type: 'T' },
            { label: 'D', text: '全身', type: 'I' },
            { label: 'E', text: '尻', type: 'R' },
            { label: 'F', text: '胃', type: 'PR' }
        ]
    },
    {
        q: '私が受け入れやすいと思うセールスパーソンとは、', opts: [
            { label: 'A', text: '充分な商品知識を持ち、私の質問に正確に答えられるタイプ。', type: 'T' },
            { label: 'B', text: '話は要点だけに止め、形式張らずに「いい取引」をしてくれるタイプ。', type: 'PR' },
            { label: 'C', text: '話が信用できて、商品の価値を正しく評価するタイプ。', type: 'PE' },
            { label: 'D', text: '軽く話しかけてきて、楽しいやり取りをしてくれるタイプ。', type: 'R' },
            { label: 'E', text: '率先してどうすればいいのかを教えてくれて、商談をリードするタイプ。', type: 'I' },
            { label: 'F', text: '親身になって私のニーズについて相談に乗ってくれるタイプ。', type: 'H' }
        ]
    },
    {
        q: '買い物をする際、私が選びやすい商品とは、', opts: [
            { label: 'A', text: '私のニーズを満たしさえすれば、最初に見せられたもの。', type: 'I' },
            { label: 'B', text: '人目を引き、実際よりも高価に見えるもの。', type: 'PR' },
            { label: 'C', text: 'ユニークで、突飛で、面白いと思えるもの。', type: 'R' },
            { label: 'D', text: '心地よく感じられ、自分にしっくりくるもの。', type: 'H' },
            { label: 'E', text: '機能的で無駄が無く、用途に忠実に作られたもの。', type: 'T' },
            { label: 'F', text: '質が高く、洗練された職人技術が分かるもの。', type: 'PE' }
        ]
    },
    {
        q: '私が苦手と思うタイプの人とは、', opts: [
            { label: 'A', text: '節操のない人。', type: 'PE' },
            { label: 'B', text: '臆病な人。', type: 'PR' },
            { label: 'C', text: '人の気持ちに鈍感な人。', type: 'H' },
            { label: 'D', text: '合理的でない人。', type: 'T' },
            { label: 'E', text: '怠惰な人。', type: 'R' },
            { label: 'F', text: '依存心の強い人。', type: 'I' }
        ]
    },
    {
        q: 'もし職場の一部署を任されたとしたら、私は次のような職場にしたい。', opts: [
            { label: 'A', text: '人間関係を築き上げ、周囲を励ましサポートし合える職場。', type: 'H' },
            { label: 'B', text: '事態がいつもと違うと思える時は、波風を立てないようにする職場。', type: 'I' },
            { label: 'C', text: '情報を集め、データを分析し、それらに沿って一貫性のある計画を立てられる職場。', type: 'T' },
            { label: 'D', text: '状況をじっくり観察し、職場内の規準や理想に照らし合わせ、問題点を検討できる職場。', type: 'PE' },
            { label: 'E', text: 'チャンスをうかがい、「今！」という時にはあえてリスクをとってでも迅速に行動できる職場。', type: 'PR' },
            { label: 'F', text: '自由な雰囲気の中で、エネルギーに溢れ、創造性を生かして仕事をこなせる職場。', type: 'R' }
        ]
    },
    {
        q: '相手と意見の相違が生じた場合、私はおそらく', opts: [
            { label: 'A', text: '相手が私の意見に耳を貸そうとしないと思い込み、そのことをいまわしく思う。', type: 'PE' },
            { label: 'B', text: '引きこもり、一人になりたいと思う。', type: 'I' },
            { label: 'C', text: '自分をやり込めた相手に仕返しをする。', type: 'PR' },
            { label: 'D', text: '傷つき、拒絶感を抱く。相手から認められていないと自己不信に陥る。', type: 'H' },
            { label: 'E', text: '相手が感情的になりすぎて、私のようにしっかり考えて問題に対処しないことに腹を立てる。', type: 'T' },
            { label: 'F', text: '相手から誤解され、批判されていると感じ、復讐心に似た怒りを覚える。', type: 'R' }
        ]
    },
    {
        q: '私の心に響く言葉は、', opts: [
            { label: 'A', text: '「信じていますよ」', type: 'PE' },
            { label: 'B', text: '「君の言っていることは、もっともだ」', type: 'T' },
            { label: 'C', text: '「よくやってくれましたね」', type: 'H' },
            { label: 'D', text: '「客観的事実が第一」', type: 'T' },
            { label: 'E', text: '「チャンスを逃すな」', type: 'PR' },
            { label: 'F', text: '「好き、嫌いは、ハッキリと」', type: 'R' }
        ]
    },
    {
        q: '私の性格の中で顕著に表れている部分は、', opts: [
            { label: 'A', text: '人々を楽しませ、彼らが思いのままに自分を出せるようにするところ。', type: 'R' },
            { label: 'B', text: 'ネットワーク作りが好きで、人を駆り立て行動を起こさせるところ。', type: 'PR' },
            { label: 'C', text: '人に尽くすことが好きで、人を励ましサポートするところ。', type: 'H' },
            { label: 'D', text: '目標を定め、情報を収集し、論理的に事を進めるところ。', type: 'T' },
            { label: 'E', text: '何が正しいのかを判断し、それを守り抜くところ。', type: 'PE' },
            { label: 'F', text: '人から誘われるまで、控え目に待つところ。', type: 'I' }
        ]
    },
    {
        q: 'ごく最近、私が自分の人生について関心を持っていることは、', opts: [
            { label: 'A', text: '自分がいい仕事をしているかどうかということ。', type: 'T' },
            { label: 'B', text: '自分が本当に正しいことをしているかどうかということ。', type: 'PE' },
            { label: 'C', text: 'どうすれば安全・平穏でいられるかということ。', type: 'I' },
            { label: 'D', text: '人に好かれているかどうかということ。', type: 'H' },
            { label: 'E', text: '自分が「成功者」であるというイメージを作り上げること。', type: 'PR' },
            { label: 'F', text: '本当に自分らしく生き、楽しんでいるかどうかということ。', type: 'R' }
        ]
    },
    {
        q: '相手に親愛の情を示すとしたら、私なら', opts: [
            { label: 'A', text: 'スキンシップや、愛と思いやりのある言葉で表現する。', type: 'H' },
            { label: 'B', text: '頼りがいのある責任感の強い態度を示す。', type: 'T' },
            { label: 'C', text: '相手が信頼してくれるような誠実さを示す。', type: 'PE' },
            { label: 'D', text: '相手に要求することはほとんどせず、相手の世界を大事にする。', type: 'I' },
            { label: 'E', text: 'ゴージャスな贈り物をしたり、「大人の遊び」に誘ったりする。', type: 'PR' },
            { label: 'F', text: 'とにかく一緒に楽しい時間を過ごす。', type: 'R' }
        ]
    },
    {
        q: '相手がどんな人であるかを知るのに、私なら　　　　　　を手がかりにする。', opts: [
            { label: 'A', text: '相手が何を想像しているか', type: 'I' },
            { label: 'B', text: '相手がどのように反応しているか', type: 'R' },
            { label: 'C', text: '相手がどんな行動を取っているか', type: 'PR' },
            { label: 'D', text: '相手が何を感じているか', type: 'H' },
            { label: 'E', text: '相手がどのように考えているか', type: 'T' },
            { label: 'F', text: '相手が何を信じているか', type: 'PE' }
        ]
    },
    {
        q: '私が求めるのは、', opts: [
            { label: 'A', text: '尊敬', type: 'PE' },
            { label: 'B', text: 'プライバシー', type: 'I' },
            { label: 'C', text: '興奮', type: 'PR' },
            { label: 'D', text: '受容', type: 'H' },
            { label: 'E', text: '達成', type: 'T' },
            { label: 'F', text: '楽しさ', type: 'R' }
        ]
    },
    {
        q: '優れたリーダーとは、人が　　　　　　を欲しているということを知っている人である。', opts: [
            { label: 'A', text: 'より強い責任感、教育、公平な待遇', type: 'T' },
            { label: 'B', text: '規則、規定、机上の論理にとらわれることなく、行動を起こすチャンスを逃さないこと', type: 'PR' },
            { label: 'C', text: 'ユニークであることが受け入れられる雰囲気の中で、自分自身を思い切り表現すること', type: 'R' },
            { label: 'D', text: '信頼できる、モラルのある倫理的な基盤', type: 'PE' },
            { label: 'E', text: '明確な指示と、安全で安定した仕組み', type: 'I' },
            { label: 'F', text: '愛情と思いやり', type: 'H' }
        ]
    },
    {
        q: '人のスピーチを最初の少しだけ聴いた時、　　　　　　のようなフレーズがあれば、私は続けて聴いてもいいと思うだろう。', opts: [
            { label: 'A', text: '「ご自分を振り返って下さい」「心穏やかに」', type: 'I' },
            { label: 'B', text: '「お会いできて嬉しいです」「あなたの（ご家族の）ために」', type: 'H' },
            { label: 'C', text: '「要点は」「やってみなければ始まらない」', type: 'PR' },
            { label: 'D', text: '「話の順序と全体の流れは〜」「論理的に考えると」', type: 'T' },
            { label: 'E', text: '「確信しています」「〜すべき」', type: 'PE' },
            { label: 'F', text: '「〜は好き」「〜は好きじゃない」', type: 'R' }
        ]
    },
    {
        q: '褒められるとしたら、私がかけてもらいたい言葉は', opts: [
            { label: 'A', text: '「いい仕事をしましたね」', type: 'T' },
            { label: 'B', text: '「その信念、熱意には敬服します」', type: 'PE' },
            { label: 'C', text: '「あなたの内面世界は奥深いですね」', type: 'I' },
            { label: 'D', text: '「行動力がありますね」', type: 'PR' },
            { label: 'E', text: '「あなたは大切な人です」', type: 'H' },
            { label: 'F', text: '「あなたと一緒にいると楽しいですね！」', type: 'R' }
        ]
    },
    {
        q: '私が自分の会社（または組織）の長になってほしいと思う人は、', opts: [
            { label: 'A', text: '部下の能力や業績よりも人間性を認め、無条件の思いやりを持って部下を受け入れることのできる人。', type: 'H' },
            { label: 'B', text: '部下が時間を有効に使えるようにスケジュールを管理し、部下の仕事の能力や成果を客観的に評価できる人。', type: 'T' },
            { label: 'C', text: '先頭に立って行動を起こし、逆境に強い人。', type: 'PR' },
            { label: 'D', text: '信念を持って職務に取り組む人。また、部下の仕事の成果だけでなく、献身的で忍耐強い姿勢をも評価してくれる人。', type: 'PE' },
            { label: 'E', text: 'ざっくばらんで遊び心があり、部下と一緒に楽しい冗談を言ったりできる、明るい人。', type: 'R' },
            { label: 'F', text: '一人だけの時間・空間、また逐一仕事の指示が必要な部下もいるのだということを理解して、部下の個性を守ってくれる人。', type: 'I' }
        ]
    },
    {
        q: '優れたリーダーとは、', opts: [
            { label: 'A', text: '穏やかな人。', type: 'I' },
            { label: 'B', text: '人を惹きつける魅力を持っている人。', type: 'PR' },
            { label: 'C', text: '遊び心に溢れた人。', type: 'R' },
            { label: 'D', text: '思いやりのある人。', type: 'H' },
            { label: 'E', text: '論理的な人。', type: 'T' },
            { label: 'F', text: '信念に打ち込める人。', type: 'PE' }
        ]
    },
    {
        q: '私にとってお金とは、', opts: [
            { label: 'A', text: '個人的なもの（特に意味は無い）。', type: 'I' },
            { label: 'B', text: '自分をワクワクさせるために使うもの（楽しみを持つためのもの）。', type: 'R' },
            { label: 'C', text: '周りの人を思いやるために使うもの。', type: 'H' },
            { label: 'D', text: '刺激的で興奮させるもの。', type: 'PR' },
            { label: 'E', text: '勤勉への報酬。', type: 'PE' },
            { label: 'F', text: '将来への備え・安心を保証するもの。', type: 'T' }
        ]
    }
];


// ===== Application State =====
let currentQuestion = 0;
const answers = Array.from({ length: QUESTIONS.length }, () => Array(6).fill(0));

// ===== DOM Elements =====
const heroSection = document.getElementById('hero');
const quizSection = document.getElementById('quiz');
const resultsSection = document.getElementById('results');
const questionCard = document.getElementById('questionCard');
const progressFill = document.getElementById('progressFill');
const progressCurrent = document.getElementById('progressCurrent');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const validationMsg = document.getElementById('validationMsg');
const loadingOverlay = document.getElementById('loadingOverlay');

// ===== Start Quiz =====
function startQuiz() {
    heroSection.style.display = 'none';
    quizSection.classList.add('active');
    currentQuestion = 0;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Render Question =====
function renderQuestion() {
    const q = QUESTIONS[currentQuestion];
    const total = QUESTIONS.length;

    progressFill.style.width = `${((currentQuestion + 1) / total) * 100}%`;
    progressCurrent.innerHTML = `<strong>${currentQuestion + 1}</strong> / ${total}`;

    btnPrev.disabled = currentQuestion === 0;
    btnNext.textContent = currentQuestion === total - 1 ? '結果を見る →' : '次へ →';

    validationMsg.classList.remove('show');

    let html = `
    <div class="question-number">Question ${currentQuestion + 1}</div>
    <div class="question-text">${q.q}</div>
    <div class="ranking-instruction">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#8899ee" stroke-width="1.5"/><path d="M8 5v3M8 10.5v.5" stroke="#8899ee" stroke-width="1.5" stroke-linecap="round"/></svg>
      各選択肢を1（最も当てはまる）〜6（最も当てはまらない）で順位を付けてください。同じ数字は使えません。
    </div>
    <div class="options-list">
  `;

    q.opts.forEach((opt, i) => {
        const val = answers[currentQuestion][i];
        html += `
      <div class="option-item" id="opt-${i}">
        <div class="option-label">${opt.label}</div>
        <div class="option-text">${opt.text}</div>
        <div class="option-select">
          <select onchange="setAnswer(${i}, this.value)" class="${val > 0 ? 'selected' : ''}">
            <option value="0" ${val === 0 ? 'selected' : ''}>—</option>
            <option value="1" ${val === 1 ? 'selected' : ''}>1</option>
            <option value="2" ${val === 2 ? 'selected' : ''}>2</option>
            <option value="3" ${val === 3 ? 'selected' : ''}>3</option>
            <option value="4" ${val === 4 ? 'selected' : ''}>4</option>
            <option value="5" ${val === 5 ? 'selected' : ''}>5</option>
            <option value="6" ${val === 6 ? 'selected' : ''}>6</option>
          </select>
        </div>
      </div>
    `;
    });

    html += '</div>';
    questionCard.innerHTML = html;
    questionCard.style.animation = 'none';
    requestAnimationFrame(() => { questionCard.style.animation = 'slideIn 0.5s ease'; });
}

// ===== Set Answer =====
function setAnswer(optIndex, value) {
    answers[currentQuestion][optIndex] = parseInt(value);
    const sel = document.querySelectorAll('.option-select select');
    sel.forEach((s, i) => {
        s.classList.toggle('selected', answers[currentQuestion][i] > 0);
    });
    validationMsg.classList.remove('show');
    document.querySelectorAll('.option-item').forEach(el => el.classList.remove('error'));
}

// ===== Validate Current Question =====
function validateQuestion() {
    const a = answers[currentQuestion];
    const nonZero = a.filter(v => v > 0);

    if (nonZero.length < 6) {
        validationMsg.textContent = 'すべての選択肢に順位を付けてください（1〜6）。';
        validationMsg.classList.add('show');
        a.forEach((v, i) => {
            if (v === 0) document.getElementById(`opt-${i}`).classList.add('error');
        });
        return false;
    }

    const sorted = [...nonZero].sort();
    const expected = [1, 2, 3, 4, 5, 6];
    if (JSON.stringify(sorted) !== JSON.stringify(expected)) {
        validationMsg.textContent = '1〜6の数字を重複なく使ってください。';
        validationMsg.classList.add('show');
        return false;
    }

    return true;
}

// ===== Navigation =====
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function nextQuestion() {
    // if (!validateQuestion()) return; // レビュー用に一時解除

    if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showResults();
    }
}

// ===== Calculate Scores =====
function calculateScores() {
    const scores = { T: 0, PE: 0, H: 0, I: 0, PR: 0, R: 0 };

    QUESTIONS.forEach((q, qi) => {
        q.opts.forEach((opt, oi) => {
            scores[opt.type] += answers[qi][oi];
        });
    });

    return scores;
}

// ===== Show Results =====
function showResults() {
    loadingOverlay.classList.add('active');

    setTimeout(() => {
        const scores = calculateScores();

        // Sort types by score (lower = more dominant)
        const ranked = Object.entries(scores)
            .map(([id, score]) => ({ ...TYPES[id], score }))
            .sort((a, b) => a.score - b.score);

        // Build ranking HTML
        const rankingHtml = ranked.map((t, i) => `
      <div class="ranking-item ${i === 0 ? 'top' : ''}">
        <div class="rank-number ${i < 3 ? 'rank-' + (i + 1) : 'rank-other'}">${i + 1}</div>
        <div class="rank-color-bar" style="background: ${t.color}"></div>
        <div class="rank-info">
          <div class="rank-type-name">${t.icon} ${t.name}</div>
          <div class="rank-type-desc">${t.traits.join(' · ')}</div>
        </div>
        <div class="rank-score">${t.score}pt</div>
      </div>
    `).join('');

        document.getElementById('rankingList').innerHTML = rankingHtml;

        // Build detail cards (top 3)
        const detailHtml = ranked.slice(0, 3).map((t, i) => `
      <div class="detail-card">
        <div class="detail-card-header">
          <div class="detail-type-icon" style="background: ${t.color}20; color: ${t.color}">${t.icon}</div>
          <div>
            <div class="detail-type-name" style="color: ${t.color}">${i + 1}位: ${t.name}</div>
            <div class="detail-type-subtitle">スコア: ${t.score}pt（低いほど優勢）</div>
          </div>
        </div>
        <div class="detail-traits">
          ${t.traits.map(tr => `<span class="trait-tag">${tr}</span>`).join('')}
        </div>
        <div class="detail-description">${t.desc}</div>
      </div>
    `).join('');

        document.getElementById('typeDetails').innerHTML = detailHtml;

        // Show results first (behind loading overlay) so canvas has dimensions
        quizSection.classList.remove('active');
        resultsSection.classList.add('active');

        // Draw radar chart (now container has width)
        drawRadarChart(scores);

        // Remove loading overlay
        loadingOverlay.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
}

// ===== Radar Chart =====
function drawRadarChart(scores) {
    const canvas = document.getElementById('radarChart');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const container = canvas.parentElement;
    const size = Math.min(420, Math.max(280, container.clientWidth - 32));
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    const cx = size / 2, cy = size / 2, r = size * 0.34;
    const typeOrder = ['T', 'PE', 'H', 'I', 'PR', 'R'];
    const labels = typeOrder.map(id => TYPES[id]);
    const n = 6;

    // Invert scores (lower is better → higher on chart)
    const maxScore = 45 * 6;
    const values = typeOrder.map(id => 1 - (scores[id] / maxScore));

    ctx.clearRect(0, 0, size, size);

    // Draw grid
    for (let level = 1; level <= 5; level++) {
        const lr = (r * level) / 5;
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
            const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
            const x = cx + lr * Math.cos(angle);
            const y = cy + lr * Math.sin(angle);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Draw axes
    for (let i = 0; i < n; i++) {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.stroke();
    }

    // Draw data polygon
    ctx.beginPath();
    values.forEach((v, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const x = cx + r * v * Math.cos(angle);
        const y = cy + r * v * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    const grad = ctx.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
    grad.addColorStop(0, 'rgba(102, 126, 234, 0.25)');
    grad.addColorStop(1, 'rgba(118, 75, 162, 0.25)');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(102, 126, 234, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw data points and labels
    values.forEach((v, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const x = cx + r * v * Math.cos(angle);
        const y = cy + r * v * Math.sin(angle);

        // Point
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = labels[i].color;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label
        const lx = cx + (r + 30) * Math.cos(angle);
        const ly = cy + (r + 30) * Math.sin(angle);
        ctx.font = "600 12px 'Noto Sans JP', sans-serif";
        ctx.fillStyle = labels[i].color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labels[i].icon + ' ' + labels[i].name.split('（')[0], lx, ly);
    });
}

// ===== Retry =====
function retryQuiz() {
    resultsSection.classList.remove('active');
    answers.forEach(a => a.fill(0));
    currentQuestion = 0;
    heroSection.style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
