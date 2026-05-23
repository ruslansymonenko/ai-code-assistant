export function Header() {
  return (
    <box alignItems="center" justifyContent="center">
      <box justifyContent="center" alignItems="center" gap={0.5} flexDirection="row">
        <ascii-font font="tiny" text="Ai Code" color="gray" marginRight={2} />
        <ascii-font font="tiny" text="Assistant" />
      </box>
    </box>
  );
}
