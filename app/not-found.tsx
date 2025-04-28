export default function NotFound() {
  return (
    <div className="flex justify-center grow p-16 bg-gray-100">
      <dl className="text-black">
        <dt className="text-4xl">ページが見つかりませんでした。</dt>
        <dd className="mt-2">あなたがアクセスしようとしたページは存在しません。
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  );
}