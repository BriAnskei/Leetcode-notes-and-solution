function containsNearbyAlmostDuplicate2(nums, indexDiff, valueDiff) {
  if (valueDiff < 0) return false;

  const buckets = new Map();
  const bucketSize = valueDiff + 1;

  function getBucketId(num) {
    return Math.floor(num / bucketSize);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const bucketId = getBucketId(num);

    console.log(`\n[Step ${i}] Processing num=${num}`);
    console.log(`   ➤ bucketId = ${bucketId}, bucketSize = ${bucketSize}`);
    console.log(`   ➤ Current buckets:`, Object.fromEntries(buckets));

    // Check same bucket
    if (buckets.has(bucketId)) {
      console.log(
        `   ✅ Found duplicate in SAME bucket (bucketId=${bucketId})`
      );
      return true;
    }

    if (buckets.has(bucketId - 1)) {
      const diff = Math.abs(num - buckets.get(bucketId - 1));
      console.log(
        `   Checking LEFT neighbor bucket=${bucketId - 1}, diff=${diff}`
      );

      if (diff <= valueDiff) {
        console.log(`   ✅ Found nearby duplicate with LEFT bucket`);
        return true;
      }
    }

    if (buckets.has(bucketId + 1)) {
      const diff = Math.abs(num - buckets.get(bucketId + 1));
      console.log(
        `   Checking RIGHT neighbor bucket=${bucketId + 1}, diff=${diff}`
      );
      if (diff <= valueDiff) {
        console.log(`   ✅ Found nearby duplicate with RIGHT bucket`);
        return true;
      }
    }

    buckets.set(bucketId, num);
    console.log(`   ➤ Inserted num=${num} into bucketId=${bucketId}`);

    if (i >= indexDiff) {
      const oldNum = nums[i - indexDiff];
      const oldBucketId = getBucketId(oldNum);
      buckets.delete(oldBucketId);
      console.log(
        `   ❌ Removed num=${oldNum} from bucketId=${oldBucketId} (out of indexDiff window)`
      );
    }
  }

  console.log("\nNo nearby duplicates found.");
  return false;
}

console.log(
  "\nFinal Result:",
  containsNearbyAlmostDuplicate2([0, 1, 2, 3, 1], 3, 0)
);
