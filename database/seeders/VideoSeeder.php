<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Video;
use Faker\Factory as Faker;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Instantiate Faker to generate fake data
        $faker = Faker::create();

        // Loop to create 5 videos
        foreach (range(1, 5) as $index) {
            Video::create([
                'user_id' => 1, // Assuming a user with ID 1 exists
                'title' => $faker->sentence,
                'description' => $faker->paragraph,
                'video_url' => $faker->text(60),
                'url' => $faker->url,
                'thumbnail' => $faker->imageUrl(640, 480, 'video', true), // Fake thumbnail URL
                'views' => $faker->numberBetween(100, 1000),
                'likes' => $faker->numberBetween(10, 500),
                'comments' => $faker->numberBetween(0, 100),
            ]);
        }
    }
}
