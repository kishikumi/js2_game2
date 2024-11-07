$(document).ready(function () {
    let level = 1; // 初期レベル
    let points = 0; // 初期ポイント

    // ポイントの加算条件
    const criteria = {
        sleep: { min: 7, max: 9 },
        food: { min: 1, max: 3 },
        exercise: { min: 1, max: 5 }
    };

    // レベルアップ時のメッセージリスト
    const messages = [
        "その調子で！",
        "やる気満々！",
        "順調だね！この調子で！",
        "素晴らしい調子ですね！",
        "Good job!",
        "この調子で行こう！",
        "明日はいいことあるよ〜",

    ];


    // ボタンが押されたときの処理
    $('#calculate').on('click', function () {
        const sleep = Number($('#sleep').val());
        const food = Number($('#food').val());
        const exercise = Number($('#exercise').val());

        // 各基準を満たしているかを確認
        if (isInRange(sleep, criteria.sleep) && isInRange(food, criteria.food) && isInRange(exercise, criteria.exercise)) {
            points += 10; // 基準内であれば10ポイント加算
            $('#points').text(points);

            // レベルアップの条件
            if (points >= level * 20) {
                level++;
                $('#level').text(level);

                // レベルアップ時にキャラクター画像とメッセージを更新
                $('#character').attr('src',`level${level}.png`);
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                $('#message').text(randomMessage);
            }
        } else {
            $('#message').text("基準を満たしていません。もう一度挑戦してください！");
        }
    });

    // 値が基準内かを確認する関数
    function isInRange(value, range) {
        return value >= range.min && value <= range.max;
    }
});

