import {
  Container,
  Stack,
  Title,
  Text,
  SimpleGrid,
  Card,
  Group,
  Badge,
  Avatar,
} from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      review:
        "Layanan luar biasa! Proses cepat, mekanik ramah, dan harga sangat wajar.",
      rating: 5,
      service: "Perbaikan Mesin",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Chen",
      review:
        "Selalu jujur, dapat dipercaya, dan kualitas servisnya konsisten tinggi.",
      rating: 5,
      service: "Perawatan Rutin",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Lisa Rodriguez",
      review:
        "Perbaikan rem cepat dan hasilnya memuaskan. Sangat direkomendasikan!",
      rating: 5,
      service: "Servis Rem",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 16px",
        background: "var(--mantine-color-gray-0)",
      }}
    >
      <Container size="lg">
        <Stack align="center" mb={60} gap="xs">
          <Title order={2} style={{ fontSize: "2rem", fontWeight: 800, color: "var(--mantine-color-blue-6)" }}>
            Apa Kata Pelanggan Kami
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={650}>
            Dengarkan pengalaman nyata dari pelanggan kami yang telah merasakan
            layanan terbaik.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              withBorder
              shadow="md"
              padding="xl"
              radius="lg"
              style={{
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--mantine-shadow-sm)";
              }}
            >
              <Stack gap="sm">
                <Group gap={8}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <IconStar key={j} size={18} fill="gold" color="gold" />
                  ))}
                </Group>
                <Group align="center" gap="sm">
                  <Avatar src={t.avatar} alt={t.name} radius="xl" size={48} />
                  <Stack gap={0}>
                    <Title order={4}>{t.name}</Title>
                    <Badge color="blue" variant="light" radius="sm" size="sm">
                      {t.service}
                    </Badge>
                  </Stack>
                </Group>
                <Text c="dimmed" fs="italic" size="sm">
                  “{t.review}”
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
